import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { FirebaseWrapper } from './firebasewrapper';
let firewrap = new FirebaseWrapper();
//import firebase from "firebase";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'did' })
};

@Injectable({ providedIn: 'root'})

export class RestService {
 API_URL  =  'http://localhost:5001/sql';
constructor(private  httpClient:  HttpClient)
 {}
	getStudents(){
		 //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('students');
	    //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
	}
  getBooks(){
		 //const body = JSON.stringify({"fn": 'selectAll', "params": ["books"]});
	    return firewrap.selectAll('books');
	}

  postStudent(student) {
    return firewrap.addStudent(student);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  postReceipt(receiptDate) {
    console.log("rest postReceipt");
    return firewrap.addReceipt(receiptDate);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  getReceipt(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('receipt');
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }
  getReceiptById(tableName,id){
    return firewrap.selectAllById(tableName,id);
  }
  update(tableName,id,data){
    return firewrap.update(tableName,id,data);
  }
  delete(tableName,id){
    return firewrap.deleteData(tableName,id);
  }
  getStudentsById(id){
      return firewrap.selectAllById('students',id);
  }

  getStudentsByClass(classVal){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAllByClass('students',classVal);
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }

  getFeeForReceipt(classVal,feeType) {
    return firewrap.getFeeForReceipt(classVal,'fee');
  }
  postBook(bookData) {
    return this.httpClient.post(`${this.API_URL}`,bookData, httpOptions)
  }
  getClasses(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["class"]});
      return firewrap.selectAll('class');
  }
  getRollNumber(classId){
      return  this.httpClient.post(`${this.API_URL}`,classId, httpOptions)
  }

  postEditStudent(editStudentData){
      return this.httpClient.post(`${this.API_URL}`,editStudentData,httpOptions)
  }
  postLogin(body){
    return firewrap.login(body);
  }
  postAttendance(attendance){
    return firewrap.addAttendance(attendance);
    //return this.httpClient.post(`${this.API_URL}`,body,httpOptions)
  }
   deleteRowAttendance(tableName,rollNumber,date,className){
    return firewrap.deleteAttendanceData(tableName,rollNumber,date,className);
  }
  /*getAttendanceByClass(body){
    return this.httpClient.post(`${this.API_URL}`,body,httpOptions)

  }*/
   getAttendanceByClass(tableName,classVal,date){
    return firewrap.getAttendanceByIdAndClass(tableName,classVal,date);
  }

  logout() {
    return firewrap.logout();
  }
  getReceiptSno(receipt){
    return firewrap.getReceiptSno(receipt);
  }
   postFee(fee) {
    return firewrap.addFee(fee);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  getFee(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('fee');
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }

  getDuplicate(tableName,val){
    return firewrap.check(tableName,val);
  }
  getSubmitFeeData(classValue,roll_no,tableName){
    return firewrap.getSubmitedFeeData(classValue,roll_no,tableName);
  }
   getFullFee(classValue){
    return firewrap.getFeeForReceipt(classValue,'fee');
  }
  selectAllByClassAndRollNum(classVal,rollNum){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAllByClassAndRollNum('students',classVal,rollNum);
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }
  checkPresentAttend(tableName,roll_number,date,classVal) {
    return firewrap.checkPresentAttend(roll_number,date,classVal);
  }
  getRecentStudentData(tableName){
    return firewrap.getRecentStudentData(tableName);
  }
  postClass(class_data) {
    return firewrap.addClass(class_data);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  getClassData(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('class_table');
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
  }
   postCollegeReceipt(receiptDate) {
    console.log("rest postReceipt");
    return firewrap.addCollegeReceipt(receiptDate);
    //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
  }
  getCollegeReceipt(){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAll('college_receipt');
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
}
  getCollegeReceiptByParam(param, value){
     //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
     return firewrap.selectAllByParam('college_receipt', param, value);
      //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
}
  postExpense(expense){
    return firewrap.addExpense(expense)
  }
  getExpenses(){
    return firewrap.selectAll('expenses')
  }
  getFilterDataByDate(tableName,fromDate,toDate) {
   return firewrap.selectAllByDate(tableName,fromDate,toDate);
  }
};
