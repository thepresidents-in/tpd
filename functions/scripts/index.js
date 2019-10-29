const functions = require('firebase-functions');
const json2csv = require('json2csv').parse;
const projectId = 'disd-aaa';
const util = new (require('../utils/index'))()
const cron = new (require('../crons/index'))(util)

const {serviceAccount, bigquery, storage, bucket, admin} = util.firebaseSetup(projectId);

const firestoredb = admin.firestore();
const cors = require('cors')({origin:true})
const fetch = require('node-fetch');
const json2xls = require('json2xls');
const path = require('path');
const os = require('os');
const fs = require('fs');
const reports = new (require('../reports/index'))(firestoredb, bucket);
function uuidv4() {
  let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return Math.floor(new Date() / 1000)+"-"+ x;
}


function writeInDev(collection, doc, data){
  let devdb = util.initializeDevFirestore()
  devdb.collection(collection).doc(doc).set(data)
}


function copyVisitorDataToUAT(clientId, dateStr){
    const serverTime = util.getServerTime(dateStr)
    console.log('dateStartTimeUnix', serverTime.dateStartTimeUnix)
    console.log('dateEndTimeUnix', serverTime.dateEndTimeUnix)
    const clientCollectionName = 'visitors/doc/'+clientId
    const clientCollectionName2 = 'visitors/doc/'+clientId
    console.log('anp step1', clientCollectionName);
    const firestoredbUAT = initializeUatFirestore()
    console.log('anp step2',clientCollectionName2 );
    firestoredb.collection(clientCollectionName)
    .where('timestamp', '>=', serverTime.dateStartTimeUnix)
    .where('timestamp', '<=', serverTime.dateEndTimeUnix)
    .get()
    .then(snapshot => {
      let ps = []
      console.log('anp got query mi', ps.length);
      snapshot.forEach(doc => {
        console.log(doc.id, ps.length);
        const data = doc.data()
        ps.push(firestoredbUAT.collection(clientCollectionName2).doc(data.docId).set(data))
      });
      return Promise.all(ps)
    })
    .then((data)=>{
      console.log('anp copy done');
      return true
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}

function copyVisitorDataToStage(clientId, dateStr){
    const serverTime = util.getServerTime(dateStr)
    console.log('dateStartTimeUnix', serverTime.dateStartTimeUnix)
    console.log('dateEndTimeUnix', serverTime.dateEndTimeUnix)
    const clientCollectionName = 'visitors/doc/'+clientId
    const clientCollectionName2 = 'visitors/doc/'+clientId
    console.log('anp step1', clientCollectionName);
    const firestoredbStage = initializeStageFirestore()
    console.log('anp step2',clientCollectionName2 );
    firestoredb.collection(clientCollectionName)
    .where('timestamp', '>=', serverTime.dateStartTimeUnix)
    .where('timestamp', '<=', serverTime.dateEndTimeUnix)
    .get()
    .then(snapshot => {
      let ps = []
      console.log('anp got query mi', ps.length);
      snapshot.forEach(doc => {
        console.log(doc.id, ps.length);
        const data = doc.data()
        ps.push(firestoredbStage.collection(clientCollectionName2).doc(data.docId).set(data))
      });
      return Promise.all(ps)
    })
    .then((data)=>{
      console.log('anp copy done');
      return true
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}

function copyVisitorDataToDev(clientId, dateStr){
    const serverTime = util.getServerTime(dateStr)
    console.log('dateStartTimeUnix', serverTime.dateStartTimeUnix)
    console.log('dateEndTimeUnix', serverTime.dateEndTimeUnix)
    const clientCollectionName = 'visitors/doc/'+clientId
    const clientCollectionName2 = 'visitors/doc/'+clientId
    console.log('anp step1', clientCollectionName);
    const firestoredbDev = util.initializeDevFirestore()
    //const firestoredbStage = initializeStageFirestore()
    console.log('anp step2',clientCollectionName2 );
    firestoredb.collection(clientCollectionName)
    .where('timestamp', '>=', 1565395218)
    .where('timestamp', '<=', 1565481198)
    // .where('locationId', '==', 'MIIN0002-Bangalore- 1 MG Mall')
    .limit(3000)
    .get()
    .then(snapshot => {
      let ps = []
      console.log('anp got query mi', ps.length);
      snapshot.forEach(doc => {
        console.log(doc.id, ps.length);
        const data = doc.data()
        ps.push(firestoredbDev.collection(clientCollectionName2).doc(data.docId).set(data))
      });
      return Promise.all(ps)
    })
    .then((data)=>{
      console.log('anp copy done');
      return true
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}

function copyClientStatusHistoryToDev(clientId, dateStr){
    const serverTime = util.getServerTime(dateStr)
    serverTime.dateStartTimeUnix = serverTime.dateStartTimeUnix * 1000;
    serverTime.dateEndTimeUnix = serverTime.dateEndTimeUnix * 1000;
    console.log('dateStartTimeUnix', serverTime.dateStartTimeUnix)
    console.log('dateEndTimeUnix', serverTime.dateEndTimeUnix)
    const clientCollectionName = 'clientStatusHistory/doc/'+clientId
    const clientCollectionName2 = 'clientStatusHistory/doc/'+clientId
    console.log('anp step1', clientCollectionName);
    const firestoredbDev = initializeDevFirestore()
    //const firestoredbStage = initializeStageFirestore()
    console.log('anp step2',clientCollectionName2 );
    firestoredb.collection("/clientStatusHistory/doc/mi@mi.com")
    .where("timestamp", ">=", serverTime.dateStartTimeUnix)
    .where("timestamp", "<=", serverTime.dateEndTimeUnix)
    // .where('locationId', '==', 'MIIN0002-Bangalore- 1 MG Mall')
    //.limit(100)
    .get()
    .then(snapshot => {
      let ps = []
      console.log('anp got query mi', ps.length);
      snapshot.forEach(doc => {
        const data = doc.data()
        console.log(doc.id, data);
        ps.push(writeInDev("/clientStatusHistory/doc/mi@mi.com", util.uuidv4(), data))
      });
      return Promise.all(ps)
    })
    .then((data)=>{
      console.log('anp copy done');
      return true
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}


function downloadData(){
  const serverTime = util.getServerTime('2019-08-07')
  firestoredb.collection('/visitors/doc/titaneyeplus@titaneyeplus.com')
  .where("locationId", "==", 'Neeladri_Road')
  .where("timestamp", ">=", serverTime.dateStartTimeUnix)
  .where("timestamp", "<=", serverTime.dateEndTimeUnix)
  //.limit(4)
  .get()
  .then(snapshot => {
    let ps = []
    snapshot.forEach(doc => {
      const data = doc.data()
      delete data.face
      delete data.frame
      //console.log(doc.id, data);
      ps.push(data)
    });
    return ps
  })
  .then((rows)=>{
    let columns = ["locationId", "docId", "age", "gmtTime", "timestamp", "istTime", "emp", "gender", "cameraNumber", "clientId"]
    const opts = { columns };
    const csv = json2csv(rows, opts);
    return new Promise((resolve, reject)=>{
      fs.writeFile('Neeladri_Road.csv', csv,  function (err) {
         if (err) reject(err);
         resolve(rows)
      });
    })
  })
  .then((data)=>{
    return console.log('done', data.length);
  })
  .catch((err)=>{
    console.err('err', err);
  })
}

function addStudenntIdInReceipt(){
  let studs = []
  firestoredb.collection('students')
  .get()
  .then((snapShot)=>{
    console.log('anoop', snapShot.docs.length);
    let docs = []
    for(let i = 0; i < snapShot.docs.length; i++ ){
      let doc = snapShot.docs[i].data()
      studs.push(doc)
    }
    return studs
  })
  .then((studs)=>{
    return firestoredb.collection('college_receipt')
    .get()
  })
  .then((snapShot)=>{
    console.log('anoop college_receipt', snapShot.docs.length);
    let ps = []
    for(let i = 0; i < snapShot.docs.length; i++ ){
      let doc = snapShot.docs[i].data()
      for(let stu of studs){
        if(stu.idNumber === doc.idNumber){
          doc.student_uId = stu.uId
          ps.push(firestoredb.collection('college_receipt').doc(doc.uId).set(doc))
          console.log('anp matching', i);
        }
      }
    }
    return Promise.all(ps)
  })
  .then((snapShot)=>{
    console.log('anp done');
  })
  .catch((err)=>{
    console.error('err', err);
  })
}

function testSnapshotIterator(){
  firestoredb.collection('students')
  .get()
  .then((snapShot)=>{
    console.log('anoop', snapShot.docs.length);
    let ps = []
    for(let i = 0; i < snapShot.docs.length; i++ ){
      let doc = snapShot.docs[i].data()
      let arr = ['hindi', 'sanskrit', 'medieval_history', 'home_science', 'pedagogy', 'sociology', 'political_science']
      doc['Hindi'] = doc['Hindi'] ? doc['Hindi'] : doc['hindi'] ? doc['hindi'] :false
      doc['Sanskrit'] = doc['Sanskrit'] ? doc['Sanskrit'] : doc['sanskrit'] ? doc['sanskrit'] :false
      doc['Medieval History'] = doc['Medieval History'] ? doc['Medieval History'] : doc['medieval_history'] ? doc['medieval_history'] : false
      doc['Home Science'] = doc['Home Science'] ? doc['Home Science'] : doc['home_science'] ? doc['home_science']:false
      doc['Pedagogy'] = doc['Pedagogy'] ? doc['Pedagogy'] : doc['pedagogy'] ? doc['pedagogy'] :false
      doc['Sociology'] = doc['Sociology'] ? doc['Sociology'] : doc['sociology'] ? doc['sociology'] :false
      doc['Political Science'] = doc['Political Science'] ? doc['Political Science'] : doc['political_science'] ? doc['political_science'] :false
      let keys = Object.keys(doc)
      for(let a of arr){
        if(keys.indexOf(a) >=0){
          delete doc[a]
        }
      }
      let p = firestoredb.collection('students').doc(doc.uId).update(doc)
      ps.push(p)
    }
    return Promise.all(ps)
  })
  .then((d)=>{
    console.log('done');
  })
  .catch((err)=>{
    console.error('err', err);
  })
}

addStudenntIdInReceipt()
//testSnapshotIterator()
//reports.camUptime4Stores('2019-08-27', '2019-08-28', 'caratlane@caratlane.com', ['delhi',  'southex'])
//reports.camUptime4Stores('2019-08-27', '2019-08-28', 'williampenn@williampenn.com', ['Infinity_malad',  'anna_nagar', 'kormangla'])
//reports.dailyWalkin4Stores('2019-08-17', '2019-08-22', 'wesenseuat@wesenseuat.com', ["here---1","wesense_office_6---1","wesense_office_dev---00","wesense_office_setup_1---4"])
//reports.hourlyData4Stores('2019-08-17', '2019-08-22', 'wesenseuat@wesenseuat.com', ["here---1","wesense_office_6---1","wesense_office_dev---00","wesense_office_setup_1---4"])
//reports.dailyWalkin4Stores('2019-07-01', '2019-08-19', 'williampenn@williampenn.com', ['Infinity_malad---2',  'anna_nagar---2', 'kormangla---1'])
//reports.dailyWalkin4Stores('2019-08-18', '2019-08-19', 'williampenn@williampenn.com', ['Infinity_malad---2',  'anna_nagar---2', 'kormangla---1'])
//downloadData()
//cron.camerasCron(initializeDevFirestore(), '2019-07-30')
//copyVisitorDataToUAT('mi@mi.com', '2019-07-30')
//copyVisitorDataToStage('mi@mi.com', '2019-07-31')
//copyVisitorDataToDev('mi@mi.com', '2019-08-09');
//copyClientStatusHistoryToDev('mi@mi.com', '2019-08-05')
//cron.camerasCronToUpdate(util.initializeProdFirestore(),  util.initializeDevFirestore(), 'fullday', '2019-08-11')
//{"from":"2019-08-22","to":"2019-08-22","clientId":"wesenseuat@wesenseuat.com","stores":["here---1","wesense_office_6---1","wesense_office_dev---00","wesense_office_setup_1---4"]}
