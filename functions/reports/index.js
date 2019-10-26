const os = require('os')
const path = require('path')
const fs = require('fs')
const json2xls = require('json2xls')

module.exports = class Reports{
  constructor(readdb, bucket){
    this.readdb = readdb
    this.bucket = bucket
  }
  getDatesRange(from, to){
    let result=[]
    for(let dt = from; dt<=to; dt.setDate(dt.getDate()+1)){
        result.push(new Date(dt).toISOString().split('T')[0]);
    }
    return result;
  }

  uploadDataToBucket(data, filename, clientId, dateFormatting){
    filename = filename + '-'+ clientId.substr(0, clientId.indexOf('@')) +'-' + (new Date()/1)
    let reportsUploadFolder = '/backup_csv/'
    let result = []
    if(dateFormatting){
      for(let store of Object.keys(data)){
          for(let date of Object.keys(data[store])){
            result.push(data[store][date])
          }
      }
    }else{
      for(let store of Object.keys(data)){
        result.push(data[store])
      }
    }

    console.log('anp result', result);
    if(!result.length){ return 'no data found for this date, please try again'}
    return new Promise((resolve, reject)=>{
              let xls = json2xls(result);
              const tempFilePath = path.join(os.tmpdir(), filename+'.xlsx');
              fs.writeFileSync(tempFilePath, xls, 'binary');
              fs.chmodSync(tempFilePath, 0o777);
              resolve(tempFilePath);
          })
          .then((tempFilePath) => {
            return this.bucket.upload(tempFilePath, { destination: reportsUploadFolder+filename+'.xlsx' });
          }).then(() => {
            const thumbFile = this.bucket.file(reportsUploadFolder+filename+'.xlsx');
            const config = { action: "read", expires: "03-01-2500", };
            return thumbFile.getSignedUrl(config)
          }).then((results) => {
            const thumbResult = results[0];
            console.log('anp res', thumbResult);
            return {downloadPath:thumbResult};
        });
  }



  getCSVData(from, to, clientId, stores){
    let ps = []
    let storeData = {}
    for(let store of stores){
      storeData[store] = {}
      for(let date of this.getDatesRange(new Date(from), new Date(to))){
        let camerasCollectionName = 'cameras/doc/'+clientId +'---'+ store
        storeData[store][date] = {}
         let p = this.readdb.collection(camerasCollectionName).doc(date).get().then((data)=>{
           let result = this.hourlyData4StoresHelper(data.data())
           let row = {...{date:date, location:store}, ...result}
           storeData[store][date] = row
           return true
         })
         .catch((err)=>{
           console.log('anp err', err);
         })
         ps.push(p)
      }
    }
    return Promise.all(ps).then((res)=>{
      return storeData
    })
    .then((data)=>{
      return this.uploadDataToBucket(data, 'Wesense Hourly Visitor Report', clientId, true);
    })
  }
}
