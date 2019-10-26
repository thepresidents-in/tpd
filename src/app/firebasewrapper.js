import firebase from "firebase";
import {Utils} from './utils/index'

export class FirebaseWrapper {

  constructor(){
    this.util = new Utils()
    let {environment, origin, projectId } = this.util.getEnv()
    let config = this.getConfig(projectId)
    if(environment === 'TPD'){
      config.apiKey = "AIzaSyB0TkKSVP63y2Xl9CNS-ZQATMGQI2ZF17o";
      config.messagingSenderId = "859676569507";
    } else if(environment === 'TRKMMV'){
      config.apiKey = "AIzaSyBBhRox04I34uBsemmItrodE2awn6Z8Zjo";
      config.messagingSenderId = "569221175582";
    }else if(environment === 'DISH'){
      config.apiKey = "AIzaSyB0TkKSVP63y2Xl9CNS-ZQATMGQI2ZF17o";
      config.messagingSenderId ="859676569507";
    }

    firebase.initializeApp(config);
    this.fireStore = firebase.firestore();
  }
  getConfig(projectId){
    let config =  { authDomain: `${projectId}.firebaseapp.com`,
      databaseURL: `https://${projectId}.firebaseio.com`,
      projectId:`${projectId}`,
      storageBucket: `${projectId}.appspot.com`
    };
    return config
  }
  uuidv4() {
    let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
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
  return this.fireStore.collection(receipt).get().then((receipt)=>{
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
  addClass(student){
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

  selectAllByParam(tableName,param, value){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where(param, '==', value).get()
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
      this.fireStore.collection(tableName).where('date', '==', date).where('roll_number', '==', rollNumber).where('class', '==', className).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
           let data = doc.data();
          rows.push(data)
          //doc.ref.delete();
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
      return this.fireStore.collection('student_attendance').doc(uId).set(attendance)
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

  getFeeForReceipt(classVal,tableName){
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

  getAttendanceByIdAndClass(tableName,classVal,date){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('class', '==', classVal).where("date", "==", date).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data);
        })
        resolve(rows)
      })
    });
    return p;
  }

  getSubmitedFeeData(classVal,roll_no,tableName){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('class', '==', classVal).where("roll_no","==", roll_no).orderBy("remaining_fee","asc").limit(1).get()
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

  selectAllByClassAndRollNum(tableName,classVal,rollNum){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('class', '==', classVal).where("roll_number", "==", rollNum).get()
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

  checkPresentAttend(rollNum,date,classVal){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection("student_attendance").where('roll_number', '==', rollNum).where('date', '==', date).where('class', '==', classVal).get()
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

  getRecentStudentData(tableName){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).orderBy("uId","desc").limit(5).get()
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
  addClass(class_data){
    let uId = this.uuidv4();
      class_data.uId = uId;
      return this.fireStore.collection('class_table').doc(uId).set(class_data)
  }
   addCollegeReceipt(receipt){
    let uId = this.uuidv4();
      receipt.uId = uId;
      return this.fireStore.collection('college_receipt').doc(uId).set(receipt)

  }

  addExpense(expense){
    let uId = this.uuidv4();
    expense.uId = uId;
    return this.fireStore.collection('expenses').doc(uId).set(expense)
  }
  selectAllByDate(tableName,fromDate,toDate){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('date', '>=', fromDate).where('date', '<=', toDate).get()
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
