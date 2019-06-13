import { Component, OnInit, Inject, Input } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,Validators,FormGroup ,NgForm} from '@angular/forms';
import { CLASSES } from '../class';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
   studentData: any = {};
	classData = CLASSES ;
  sum;
  studentList;
  sn_number;
  roll_no: number;
   feeType: number;
   annualFee : number;
   biAnnualFee : number;
   quaterlyFee : number;
   remainingFee : number;
   admissionFee : number;
   selection : string;
   session = '2019-20';
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  snoDisabled: boolean= true;
  fee:number;
  isFee: boolean=true;
  form: FormGroup;
  constructor(public datePipe : DatePipe,public rest: RestService,private spinnerService: Ng4LoadingSpinnerService) {
  	console.log("date: "+(new Date()) );
    }

  ngOnInit() {
    this.getSno();
  }

  saveStudentFee(form: NgForm){
    if(form.invalid){
    return;
    }
    console.log("form: ",form.value);
    this.rest.postReceipt(form.value).then((response) => {
      console.log("post 1");
       alert("Receipt added. !!");
       this.form.reset();

    });
  }

  getClass(formData){
    let classValue = formData.controls.class.value;

     this.rest.getStudentsByClass(classValue).then((response) => {
    console.log("res KV: ",response);
    this.studentList = response;
    this.feeType = null;

  });
}

getStudentInfo(std){
  console.log("student:",std);
}

getSno(){
 
  this.rest.getReceiptSno().then((response)=> {
     this.spinnerService.show();
    console.log("sno: ",response);
    this.sn_number = response;
    //this.sessiont = '2019-20'
    this.snoDisabled = false;

  });
   this.spinnerService.hide();
}

getAutoStudentSelect = (stdInfo) => {
  console.log("getAutoStudentSelect: ",stdInfo.option.value);
  let splitted = (stdInfo.option.value).split("-");
  console.log("splitted: ",splitted);
  this.roll_no = splitted[1];
}

getFeeData = (classVal,feeType) =>  {
console.log("test1: "+classVal.control.value);
let selectedClass = classVal.control.value;
//this.annualFee = this.biAnnualFee = this.quaterlyFee= this.admissionFee = 0;
this.fee = 0;
this.spinnerService.show();
this.rest.getFeeForReceipt(selectedClass,feeType).then((response) => {
      console.log("resp: ",response);
      console.log("dam_fee "+response[0]['admission_fee']);

      if(feeType == 0){
        //this.annualFee = response[0]['annual_fee'];
         this.fee = response[0]['annual_fee'];
        this.remainingFee = 0;
        this.admissionFee = response[0]['admission_fee'];
        console.log("annualFee: "+this.admissionFee);
        this.feeType = 0;
      }
      if(feeType == 1){
        //this.biAnnualFee = (response[0]['bi_annual_fee'])/2;
        this.fee = (response[0]['bi_annual_fee'])/2;
        console.log("biAnnualFee: "+this.biAnnualFee);
        this.remainingFee = this.fee;
        this.admissionFee = response[0]['admission_fee'];
         console.log("biAnnualFee: "+this.admissionFee);
         this.feeType = 1;
      }
      if(feeType == 2) {
        //this.quaterlyFee = (response[0]['quaterly_fee'])/3;
        this.fee = Math.round((response[0]['quaterly_fee'])/3);
        console.log("quaterlyFee: "+this.quaterlyFee);
        this.remainingFee = Math.round((this.fee)*2);
        this.admissionFee = response[0]['admission_fee'];
         console.log("quaterlyFee: "+this.admissionFee);
         this.feeType = 2;
      }
      this.isFee = false;
       // this.spinnerService.hide();


    });
}
}
