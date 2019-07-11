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
  classValue:any;
  annualDisabled:boolean=true;
  biAnnualDisabled:boolean=true;
  quaterlyDisabled:boolean=true;
  qCheck:boolean=false;
  bCheck:boolean=false;
  aCheck:boolean=false;
  fullFee:number;
  rollNum:any;
  constructor(public datePipe : DatePipe,public rest: RestService,private spinnerService: Ng4LoadingSpinnerService,private router: Router) {
  	console.log("date: "+(new Date()) );
    }

  ngOnInit() {
    this.getSno();
  }

  saveStudentFee(form: NgForm){
    if(form.invalid){
    return;
    }
    console.log(this.feeType);
    if((form.value).hasOwnProperty("feeType") === false ){
      console.log("in fee type");
      form.value["feeType"] = this.feeType;
    }
    console.log("form: ",form.value);
    this.rest.postReceipt(form.value).then((response) => {
      console.log("post 1");
       alert("Receipt added. !!");
       //this.form.reset();
       this.router.navigate(['/receiptList']);

    });
  }

  getClass(formData){
    this.classValue = formData.controls.class.value;

     this.rest.getStudentsByClass(this.classValue).then((response) => {
    console.log("res KV: ",response);
    this.studentList = response;
    this.feeType = null;

  });
}

getStudentInfo(std){
  this.aCheck = false;
  this.bCheck = false;
  this.qCheck = false;
  this.rollNum = (std).split("-");
  console.log("getStudentInfo studentKV:"+this.rollNum[1]+"and class: "+this.classValue);
   this.rest.getSubmitFeeData(this.classValue,this.rollNum[1],'receipt').then((submittedResponse) => {
   console.log("res getSubmitFeeData: ",submittedResponse);
   console.log(submittedResponse.length);
    if(submittedResponse.length != 0){
      if(submittedResponse[0]['remaining_fee'] == 0){
         alert(this.rollNum[0]+" fee has been completed.");
         this.isFee= true;
         this.annualDisabled= true;
        this.biAnnualDisabled= true;
        this.quaterlyDisabled= true;
        this.router.navigate(['/receiptList']);
      }
    if(submittedResponse[0]['feeType'] ==0){
        this.annualDisabled= true;
        this.biAnnualDisabled= true;
        this.quaterlyDisabled= true;
        this.isFee= true;
        this.fee=0;
        this.aCheck = true;
        this.bCheck = false;
        this.qCheck = false;
        //alert(rollNum[0]+" fee has been completed.");
    }else if(submittedResponse[0]['feeType'] ==1  && submittedResponse[0]['remaining_fee'] != 0){
      alert("New checked fee");
        this.fee =submittedResponse[0]['remaining_fee']
        this.admissionFee=0;
        this.remainingFee = 0;
        this.isFee= false;
        this.bCheck=true;
        this.aCheck = false;
        this.qCheck = false;
        this.feeType=1;
    }
    else if(submittedResponse[0]['feeType'] ==2 && submittedResponse[0]['remaining_fee'] !=0 ){
       this.rest.getFullFee(this.classValue).then((fullRes) => {
        let qF = Math.round((Math.round((fullRes[0]['quaterly_fee'])/3))*2);
          if(submittedResponse[0]['remaining_fee'] == qF) {
            this.annualDisabled= true;
            this.biAnnualDisabled= true;
            this.quaterlyDisabled= false;
            this.admissionFee=0;
            this.fee = Math.round((submittedResponse[0]['remaining_fee'])/2);
            this.remainingFee = this.fee;
            this.feeType=2;
            this.isFee= false;
            this.qCheck=true;
            this.bCheck = false;
        this.aCheck = false;
          }
          else{
            this.annualDisabled= true;
            this.biAnnualDisabled= true;
            this.quaterlyDisabled= false;
            this.admissionFee=0;
            this.fee = submittedResponse[0]['remaining_fee'];
            this.remainingFee = 0;
            this.feeType=2;
            this.isFee= false;
            this.qCheck=true;
            this.aCheck = false;
        this.bCheck = false;
          }
    });
    }
  }
  else{
      this.annualDisabled=false;
      this.biAnnualDisabled=false;
      this.quaterlyDisabled=false;
  }
});
}

getSno(){
  this.rest.getReceiptSno().then((response)=> {
    console.log("sno: ",response);
    this.sn_number = response;
    this.snoDisabled = false;
  });
}

getAutoStudentSelect = (stdInfo) => {
  let splitted = (stdInfo.option.value).split("-");
  console.log("splitted: ",splitted);
  this.roll_no = splitted[1];
   console.log("getAutoStudentSelect: ",stdInfo);
}

getFeeData = (classVal,feeType) =>  {
let selectedClass = classVal.control.value;
this.fee = 0;
this.spinnerService.show();
this.rest.getFeeForReceipt(selectedClass,feeType).then((response) => {
      console.log("resp: ",response);
      console.log("dam_fee "+response[0]['admission_fee']);
      this.fullFee = response[0]['annual_fee'];
      if(feeType == 0){
        //this.annualFee = response[0]['annual_fee'];
         this.fee = response[0]['annual_fee'];
        this.remainingFee = 0;
        this.admissionFee = response[0]['admission_fee'];
        console.log("annualFee: "+this.admissionFee);
        this.feeType = 0;
        this.aCheck=true;
      }
      if(feeType == 1){
        //this.biAnnualFee = (response[0]['bi_annual_fee'])/2;
        this.fee = (response[0]['bi_annual_fee'])/2;
        console.log("biAnnualFee: "+this.biAnnualFee);
        this.remainingFee = this.fee;
        this.admissionFee = response[0]['admission_fee'];
         console.log("biAnnualFee: "+this.admissionFee);
         this.feeType = 1;
         this.bCheck= true;
      }
      if(feeType == 2) {
        //this.quaterlyFee = (response[0]['quaterly_fee'])/3;
        this.fee = Math.round((response[0]['quaterly_fee'])/3);
        console.log("quaterlyFee: "+this.quaterlyFee);
        this.remainingFee = Math.round((this.fee)*2);
        this.admissionFee = response[0]['admission_fee'];
         console.log("quaterlyFee: "+this.admissionFee);
         this.feeType = 2;
          this.qCheck=true;
      }
      this.isFee = false;
       // this.spinnerService.hide();
    });
}
}
