const admin = require("firebase-admin");
const {Storage} = require('@google-cloud/storage');
const {BigQuery} = require("@google-cloud/bigquery");

module.exports = class Util{
  constructor(){ }

  uuidv4() {
    let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return Math.floor(new Date() / 1000)+"-"+ x;
  }

  getServerTimeStampByClientTime(clientTime){
    let diff = ''
    let currentServerTime =  parseInt(Math.floor(new Date().getTime() / 1000 | 0))
    if(clientTime < currentServerTime){
      let t = parseInt(Math.floor(new Date().getTime() / 1000 | 0))
      diff = clientTime - t > 5.5*60*60*1000 && clientTime - t < (5.5*60*60*1000 + 10*60*1000) ? new Date(clientTime -t):''
    }else if( clientTime > currentServerTime){
      console.log('clientTime > currentServerTime', clientTime, currentServerTime);
    }else if(clientTime === currentServerTime){
      console.log('clientTime === currentServerTime', clientTime, currentServerTime);
    }

    let currentTime = diff && diff >0 ? diff*1000: new Date().getTime();
    return parseInt(Math.floor(currentTime / 1000 | 0));
  }

  firebaseSetup(projectId){
    if(!(projectId === 'sustained-drake-232309' || projectId === 'wesense-uat' || projectId === 'wesense-stage' || projectId === 'wesensedev')){
      throw new Error('projectId not valid to initialize firebase App');
    }
    let serviceAccount = require(`./${projectId}.json`);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount), databaseURL: `https://${projectId}.firebaseio.com`, storageBucket: `${projectId}` });
    let bigquery = new BigQuery({ projectId: `${projectId}` });
    let storage = new Storage({ projectId: `${projectId}`, keyFilename: `./${projectId}.json` });
    let bucket = storage.bucket(`${projectId}.appspot.com`);

    return {serviceAccount, bigquery, storage, bucket, admin };
  }

  initializeStageFirestore(){
    let serviceAccount = require("./wesense-stage.json");
    let secondaryAppConfig = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://wesense-stage.firebaseio.com"
    };
    let stage = admin.initializeApp(secondaryAppConfig, 'stage')
    return stage.firestore()
  }

  initializeUatFirestore(){
    let serviceAccount = require("./wesense-uat.json");
    let secondaryAppConfig = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://wesense-uat.firebaseio.com"
    };
    let uat = admin.initializeApp(secondaryAppConfig, 'uat')
    return uat.firestore()
  }

  initializeDevFirestore(){
    let serviceAccount = require("./wesensedev.json");
    let secondaryAppConfig = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://wesensedev.firebaseio.com"
    };
    let dev = admin.initializeApp(secondaryAppConfig, 'dev')
    return dev.firestore()
  }

  initializeProdFirestore(){
    let serviceAccount = require("./sustained-drake-232309.json");
    let secondaryAppConfig = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://sustained-drake-232309.firebaseio.com"
    };
    let prod = admin.initializeApp(secondaryAppConfig, 'prod')
    return prod.firestore()
  }

  getServerTime(date){
    let startTime = new Date(date).setHours(0, 0, 0, 0);
    let endTime = new Date(date).setHours(23, 59, 59, 59);
    let dateStartTimeUnix = parseInt( startTime / 1000 | 0);
    let dateEndTimeUnix = parseInt(Math.floor(endTime / 1000 | 0))
    return {dateStartTime: startTime, dateEndTime: endTime, dateStartTimeUnix: dateStartTimeUnix, dateEndTimeUnix: dateEndTimeUnix, time: (new Date).getTime(), date: new Date(), yymmdd: new Date(date).toISOString().split('T')[0]};
  }

  get30MinsRange(){
    let fromTime, toTime;
    let currentDate = new Date()
    let yymmdd= currentDate.toISOString().split('T')[0]
    currentDate.setHours(currentDate.getHours() + 5);
    currentDate.setMinutes(currentDate.getMinutes() + 30);
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    if(minutes >=30){
      fromTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, 0 ,0 , 0);
      toTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, 30 ,0 , 0);
    }else if(minutes<=29){
      fromTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours -1, 30 ,0 , 0);
      toTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, 0 ,0 , 0);
    }
    fromTime = parseInt(Math.floor(fromTime / 1000 | 0))
    toTime = parseInt(Math.floor(toTime / 1000 | 0)) -1
    return {fromTime, toTime, yymmdd}
  }

  getMinsRange(range){
    let currentDate = new Date()
    currentDate.setHours(currentDate.getHours() + 5);
    currentDate.setMinutes(currentDate.getMinutes() + 30);
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let fromTime, toTime, yymmdd;
    let fromMinute = (parseInt(minutes/range)*range - range)
    let toMinute = parseInt(minutes/range)*range
    fromTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, fromMinute ,0 , 0);
    toTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, toMinute ,0 , 0);
    fromTime = parseInt(Math.floor(fromTime / 1000 | 0))
    toTime = parseInt(Math.floor(toTime / 1000 | 0)) -1
    yymmdd= new Date(currentDate).toISOString().split('T')[0]
    return {fromTime, toTime, yymmdd}
  }

  getDateTimeFormat(timestamp) {
    let dt = new Date(timestamp);
    let hours = dt.getHours().toString().length === 1 ? '0'+dt.getHours() : dt.getHours();
    let am_pm = (hours >= 12 ? 'pm' : 'am');
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let month = (dt.getMonth() < 10 ? '0' : '')+(dt.getMonth()+1);
    let dateTime = dt.getDate()+"-"+month+"-"+dt.getFullYear()+" "+hours+":"+dt.getMinutes()+":"+dt.getSeconds()+" "+am_pm;
    return dateTime;
  }

  getISTtime(timestamp) {
      let currentTime = new Date(timestamp);
      currentTime.setHours(currentTime.getHours() + 5);
      currentTime.setMinutes(currentTime.getMinutes() + 30);
      return currentTime.getTime();
  }

}
