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

  firebaseSetup(projectId){
    if(!(projectId === 'disd-aaa')){
      throw new Error('projectId not valid to initialize firebase App');
    }
    let serviceAccount = require(`../${projectId}.json`);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount), databaseURL: `https://${projectId}.firebaseio.com`, storageBucket: `${projectId}` });
    let bigquery = new BigQuery({ projectId: `${projectId}` });
    let storage = new Storage({ projectId: `${projectId}`, keyFilename: `./${projectId}.json` });
    let bucket = storage.bucket(`${projectId}.appspot.com`);
    let firestoredb = admin.firestore()
    return {serviceAccount, bigquery, storage, bucket, admin,  firestoredb};
  }

  initializeProdFirestore(projectId){
    let serviceAccount = require(`./${projectId}.json`);
    let secondaryAppConfig = {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${projectId}.firebaseio.com`
    };
    let env = admin.initializeApp(secondaryAppConfig, projectId)
    return env.firestore()
  }

}
