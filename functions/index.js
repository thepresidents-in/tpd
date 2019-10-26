const functions = require('firebase-functions');
const projectId = process.env.GCLOUD_PROJECT || 'xyz';
const util = new (require('./util/index'))()
const cron = new (require('./crons/index'))(util)
const {serviceAccount, bigquery, storage, bucket, admin} = util.firebaseSetup(projectId);
const firestoredb = admin.firestore();
const cors = require('cors')({origin:true})
const fetch = require('node-fetch');
const json2xls = require('json2xls');
const path = require('path');
const os = require('os');
const fs = require('fs');

new (require('./prodOnly/index'))(exports, functions, projectId, firestoredb, cron).deploy()
const reports = new (require('./reports/index'))(firestoredb, bucket)


exports.helloWorld = functions.https.onRequest((request, response) => {
  let id_val = request.query.id;
  response.send({id:id_val,name:'john doe'});
 });

exports.helloWorldPost = functions.https.onRequest((request, response) => {
 let id_val = request.body.id;
 response.send({id:id_val,name:'john doe'});
 });


exports.getServerTime = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let date = req.query.date;
    let startTime = new Date(date).setHours(0, 0, 0, 0);
    let endTime = new Date(date).setHours(23, 59, 59, 59);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({status:'success', startTime: startTime, endTime: endTime, time: (new Date).getTime(), date: new Date()});
  });
});
