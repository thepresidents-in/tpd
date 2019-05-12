import firebase from "firebase";
export class FirebaseWrapper {

  constructor(){
    let config = {
    apiKey: "AIzaSyD9B2YdN4gAPqryKSiHRQocPc9kA_ZSFLY",
    authDomain: "jhoraapp.firebaseapp.com",
    databaseURL: "https://jhoraapp.firebaseio.com",
    projectId: "jhoraapp",
    storageBucket: "jhoraapp.appspot.com",
    messagingSenderId: "105398319929"
  };
    firebase.initializeApp(config);
    this.fireStore = firebase.firestore();
  }

  uuidv4() {
    let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return Math.floor(new Date() / 1000)+"-"+ x;
  }

  login(body){
    return firebase.auth().signInWithEmailAndPassword(body.username, body.password).then(function() {
      return  firebase.auth().currentUser;
    });
  }

  logout(){
     return firebase.auth().signOut();
  }

  addStudent(student){
    return this.fireStore.collection('students').where('class', '==', student.class).get().then((students)=>{
       return students.size || students.length;
    })
    .then((data)=>{
      data ? (student.roll_number = data +1) : (student.roll_number = 1);
      let uId = this.uuidv4();
      student.uId = uId;
      return this.fireStore.collection('students').doc(uId).set(student)
    })
  }
getReceiptSno(receipt){
  return this.fireStore.collection('receipt').get().then((receipt)=>{
    return receipt.size || receipt.length;
  })
  .then((data)=>{
    data ? (data = data +1) : ( data = 1);
    return data;
  })
}
  addReceipt(receipt){
    let uId = this.uuidv4();
      receipt.uId = uId;
      console.log("firebase: ",receipt);
      return this.fireStore.collection('receipt').doc(uId).set(receipt)

  }

  selectAll(tableName){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  insert(tableName ='', docName, data){
    let p = new Promise( (resolve, reject)=>{
      resolve(this.fireStore.collection(tableName).doc(docName).set(data));
    });
    return p;
  }

  update(tableName, docName, data){
    let p = new Promise( (resolve, reject)=>{
      resolve(this.fireStore.collection(tableName).doc(docName).update(data));
    });
    return p;
  }

  selectAllById(tableName,id){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('uId', '==', id).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  deleteData(tableName, docName){
    let p = new Promise( (resolve, reject)=>{
      resolve(this.fireStore.collection(tableName).doc(docName).delete());
    });
    return p;
  }

  selectAllByClass(tableName,classVal){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('class', '==', classVal).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  deleteAttendanceData(tableName, rollNumber,date,className){
    let p = new Promise( (resolve, reject)=>{
      //resolve(this.fireStore.collection(tableName).where("date", "==", date).where("roll_number", "==", rollNumber).where("class", "==", className).delete());
      this.fireStore.collection(tableName).where("date", "==", date).where("roll_number", "==", rollNumber).where("class", "==", className).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
           let data = doc.data();
          rows.delete(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  addAttendance(attendance){
    let uId = this.uuidv4();
      attendance.uId = uId;
      console.log("firebase: ",attendance);
      return this.fireStore.collection('attendance').doc(uId).set(attendance)
  }

  addFee(fee){
      let uId = this.uuidv4();
      fee.uId = uId;
      return this.fireStore.collection('fee').doc(uId).set(fee)
  }

  check(tableName,val){
      let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('class', '==', val).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  getFeeForReceipt(classVal,feeType,tableName){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('class', '==', classVal).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

}
