module.exports = class Cron{

  constructor(util){
    this.util = util
    this.groupTimeFactor = 10
  }

  sendClientStatusEmailCron(firestoredb) {
      console.log("sendStatusEmail cron is running 444 ...");
      let currentTime = this.util.getISTtime(new Date().getTime());
      const nodemailer = require('nodemailer');
      let clientHtml = {};
      let clientNames = [];
      let waitForPromise = [];
      let clientWithEmailIdHtml = [];
      let res = {};
      waitForPromise.push(firestoredb.collection('clientStatus').doc('doc').listCollections()
      .then((coll) => {
          for (let col of coll) {
              clientNames.push(col.id);
          }
          return Promise.all(clientNames);
      })
      .then((data) => {
          let ps = [];
          for (let client_i = 0; client_i < data.length; client_i++) {
              let collectionName = "/clientStatus/doc/" + data[client_i];
              ps.push(firestoredb.collection(collectionName)
                .orderBy("timestamp", "desc")
                .get()
                  .then((snapShot) => {
                      let index = 1;
                      let slNo_1 = 0;
                      let updateMailPromise = [];
                      if (snapShot.size > 0) {
                          snapShot.forEach((doc, slNo) => {
                              let data = doc.data();
                              let timestamp = (new Date().getTime()/1000)|0;
                              let lastEmailSentTime = (typeof(data.lastEmailSentTime) !== 'undefined' && data.lastEmailSentTime !== 0)  ? data.lastEmailSentTime : 0;
                              let mailSentTimeDiff = (lastEmailSentTime !== '') ? parseInt((timestamp - lastEmailSentTime)|0) : '';
                              data.timestamp = this.util.getISTtime(data.timestamp);
                              let timeDifference = ((currentTime - data.timestamp) / 1000) | 0;
                              let status = timeDifference < 1800 ? 'Working' : 'Not working';
                              let timeDiff = (timeDifference > 86400) ? (timeDifference / 86400 | 0) + " days " : ((timeDifference > 3600) ? (timeDifference / 3600 | 0) + " Hours " : ((timeDifference < 60) ? timeDifference + " Seconds " : ((timeDifference / 60 | 0) + " Minutes ")));
                              let finalStatus = '', statusClass = '';
                              let cameraStatus = (typeof(data.lastFrameNumber) !== 'undefined' && data.frameNumber !== '' && data.lastFrameNumber !== '' && parseInt(data.frameNumber) > parseInt(data.lastFrameNumber)) ? 'Working' : 'Not working';
                              let cameraFeedIncreasedTime = data.cameraFeedIncreasedTime ? this.util.getISTtime(data.cameraFeedIncreasedTime*1000) : currentTime;
                              let timeCapOfCameraFeed = (currentTime - cameraFeedIncreasedTime)/1000|0;
                              if(status === 'Working' && timeCapOfCameraFeed < 1800) {
                                 finalStatus = 'Working';
                                 statusClass = 'working-sys';
                              } else if(status === 'Working' && timeCapOfCameraFeed > 1800) {
                                 finalStatus = 'No Camera Feed';
                                 statusClass = 'no-camera-feed';
                              } else {
                                 finalStatus = 'Not working';
                                 statusClass = 'not-working-sys';
                              }
                              if (finalStatus !== "Working"  && (typeof(mailSentTimeDiff) === 'string' || (mailSentTimeDiff > 0 && mailSentTimeDiff > 7200))) {
                                  clientHtml[data.clientId+"_$_$_"+data.locationId+"_$_$_"+data.cameraNumber+"_$_$_"+doc.id] =
                                    `<tr>
                                          <td valign="top" class="tbody_td_1">${data.clientId}</td>
                                          <td valign="top" class="tbody_td_1">${data.locationId}</td>
                                          <td valign="top" class="tbody_td_1">${data.cameraNumber}</td>
                                          <td valign="top" class="tbody_td_1">${timeDiff} before | ${this.util.getDateTimeFormat(data.timestamp)}</td>
                                          <td valign="top" class="tbody_td_1 ${statusClass}">${finalStatus}</td>
                                    </tr>`;
                              }
                              if(finalStatus === "Working") {
                                  updateMailPromise.push(firestoredb.collection("clientStatus/doc/"+data.clientId).doc(doc.id).update({lastEmailSentTime: 0}));
                              }
                          });
                      }
                      return Promise.all(updateMailPromise);
                  })
                  .catch((error) => {
                      console.error("checkClientStatusCron failed to select error = ", error);
                  }));
          }
          return Promise.all(ps);
      })
      .then((data) => {
          console.log("After select data = ",  clientHtml);
          let waitForPromise_2 = [];
          for (var clientHtmlKey in clientHtml) {
            if (clientHtml.hasOwnProperty(clientHtmlKey)) {
              let clientHtmlKeyArr = clientHtmlKey.split("_$_$_");
              let clientId = clientHtmlKeyArr[0];
              let locationId = clientHtmlKeyArr[1];
              let cameraNumber = clientHtmlKeyArr[2];
              let docId = clientHtmlKeyArr[3];
              waitForPromise_2.push(firestoredb.collection("/clientDetails/doc/"+clientId)
              .where("locationId", "==", locationId)
              .where("cameraNumber", "==", cameraNumber)
              .get()
              .then((snapShot) => {
                  if(snapShot.size > 0) {
                    snapShot.forEach((doc) => {
                        let data = doc.data();
                        let clc = clientId+"_$_$_"+locationId+"_$_$_"+cameraNumber+"_$_$_"+docId;
                        let emailIds = [];
                        let startOperationTime = data.startOperationTime ? data.startOperationTime : 10;
                        let endOperationTime = data.endOperationTime ? data.endOperationTime : 21;

                        let d = new Date(currentTime);
                        let hours = d.getHours();
                        console.log("H = ",hours, "SOT = ", startOperationTime, "EOT = ", endOperationTime)
                        if(hours >= startOperationTime && hours <= endOperationTime && data.email1) {
                          console.log("time verify case success....");
                          for(let key in data) {
                            (key && key !== 'email1' && key.includes("email")) && (emailIds.push(data[key]));
                          }
                          if(typeof(clientWithEmailIdHtml[data.email1]) === 'undefined' && data.email1 !== '') {
                            clientWithEmailIdHtml[data.email1] = [{clientId: clientId,locationId: locationId,cameraNumber: cameraNumber,docId: docId,template: clientHtml[clc],ccEmail: emailIds}];
                          } else if(typeof(clientWithEmailIdHtml[data.email1]) !== 'undefined' && data.email1 !== '') {
                            clientWithEmailIdHtml[data.email1] = [{clientId: clientId,locationId: locationId,cameraNumber: cameraNumber,docId: docId,template: clientHtml[clc],ccEmail: emailIds}];
                          }
                        } else {
                          console.log("time verify case failure....", typeof(hours), typeof(startOperationTime), typeof(endOperationTime));
                        }
                    });
                  }
                  return true;
              })
              .catch((error) => { console.log("sendStatusEmail error 333 = ", error); }));
            }
          }
          return Promise.all(waitForPromise_2);
      })
      .then((data) => {
          console.log("clientWithEmailIdHtml = ", clientWithEmailIdHtml);
          let mailPromise = [];
          for(let emailIdKey in clientWithEmailIdHtml) {
              let mailHtml = this.getEmailStatusTemplate(clientWithEmailIdHtml[emailIdKey][0]["template"], emailIdKey);
              let ccEmail = clientWithEmailIdHtml[emailIdKey][0]["ccEmail"] ? clientWithEmailIdHtml[emailIdKey][0]["ccEmail"].toString() : '';
              let transporter = nodemailer.createTransport({service: 'gmail',  auth: {user: 'support@wesense.ai',pass: 'passwordwesense'}});
              const mailOptions = {
                  from: 'Alert Wesense <support@wesense.ai>',
                  to: emailIdKey,
                  cc: ccEmail+", support@wesense.ai",
                  subject: 'Alert Status: Wesense footfall',
                  html: mailHtml
              };
              mailPromise.push(transporter.sendMail(mailOptions, (erro, info) => {
                  if (erro) {
                      console.log("SENT EMAIL ERROR = ", erro.toString());
                      return res.send = erro.toString();
                  }
                  console.log("emailIdKey = ", emailIdKey);
                  if(info.accepted[0] !== 'undefined' && info.accepted[0] !== 'support@wesense.ai' && (info.response).includes(" OK ") === true) {
                       let acceptedEmail = info.accepted[0];
                       console.log("acceptedEmail = ", acceptedEmail);
                       let clientId = clientWithEmailIdHtml[acceptedEmail][0]["clientId"];
                       let docId = clientWithEmailIdHtml[acceptedEmail][0]["docId"];
                       mailPromise.push(firestoredb.collection("clientStatus/doc/"+clientId).doc(docId).update({lastEmailSentTime: (new Date().getTime()/1000)|0}));
                  }
                  return true;
              }));
          }
          return Promise.all(mailPromise);
      })
      .catch((error) => {
          //return res.send({status: 404});
          console.error("mail response catch 2222 error = ", error);
      }));
      return Promise.all(waitForPromise);
  }

  getEmailStatusTemplate(template) {
      let mailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Wesense</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
          <style>
          .thead_tr{height:21px}.thead_th{border-width:1px;border-style:solid;border-color:#000 #000 #000 #ccc;overflow:hidden;padding:2px 3px;vertical-align:bottom;background-color:#999;font-family:Arial;font-weight:700;color:#fff;text-align:center}
          .tbody_td_1{border-width:1px;border-style:solid;border-color:#ccc #000 #000;overflow:hidden;padding:2px 3px;vertical-align:top;font-family:Arial;text-align:center}
          .working-sys{background-color:green;color:#000}.not-working-sys{background-color:red;color:#000}
          .no-camera-feed{background-color:#ff0;color:#000}
          </style>
        </head>
        <body>
        <div class="container">
          <div>Hi! Greetings for the day.</div>
          <p style="margin: 10px 0px 0px 0px;">Status Alert for Wesense footfall counter :</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%; border: 1px solid #dcdcdc;">
              <thead>
                <tr class="thead_tr">
                  <th scope="col" class="thead_th">Client</th>
                  <th scope="col" class="thead_th">Location</th>
                  <th scope="col" class="thead_th">Camera</th>
                  <th scope="col" class="thead_th">Last Live Time</th>
                  <th scope="col" class="thead_th">Status</th>
                </tr>
              </thead>
              <tbody>`;
              mailHtml += template;
          mailHtml += `</tbody>
          </table>
        </div>
        <div>
        <br>
        <p>Please check the following:</p>
        <p>1. The computer system is switched ON.</p>
        <p>2. It is connected to the prescribed internet network.</p>
        <p>3. Camera is up and running.</p>
        <p>If it is still not resolved or you need assistance, please reach us at 9482870796 / 8709319950</p>
        <p>Thanks and have a good day,</p>
        <p>Wesense Support Team</p>
        </div>
        </body>
        </html>`;
      return mailHtml;
  }
}
