/*const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  let id_val = request.query.id;
  response.send({id:id_val,name:'khushboo'});
 });

exports.helloWorldPost = functions.https.onRequest((request, response) => {
 let id_val = request.body.id;
 response.send({id:id_val,name:'khushboo'});
 });
*/

const functions = require('firebase-functions');
const projectId = process.env.GCLOUD_PROJECT || 'trkmmv';
const util = new (require('./util'))()
const {serviceAccount, bigquery, storage, bucket, admin, firestoredb} = util.firebaseSetup(projectId);

exports.getStudent = functions.https.onRequest((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let id = req.query.id;
    firestoredb.collection('students').doc(id).get()
    .then((doc)=>{
      let row = doc.data()
    return  res.send(row)
    })
    .catch((err)=>{
      console.log(err);
    })
});