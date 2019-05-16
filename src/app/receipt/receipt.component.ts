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
   feeType: null;
   annualFee : number;
   biAnnualFee : number;
   quaterlyFee : number;
   remainingFee : number;
   admissionFee : number;
   selection : string;
   session = '2019-20';
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
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
  	/*let keys = Object.keys(form.controls);
    let values = Object.values(form.value);*/
    console.log("form: ",form.value);

   /* this.rest.postReceipt(form.value).then((response) => {
      console.log("post 1");
       alert("Receipt added. !!");
       this.form.reset();

    });*/

  }

  getDepositeAmt(formData){
   console.log("val:",formData);
   console.log(formData.controls.pre_bal.value);
   console.log(formData.controls.form_chrgs.value);
     if(formData.controls.pre_bal.value == ''){
       formData.controls.pre_bal.value =0;
     }
     if(formData.controls.form_chrgs.value == ''){
       formData.controls.form_chrgs.value = 0;
     }
     if(formData.controls.adm_fee.value == ''){
       formData.controls.adm_fee.value = 0;
     }
     if(formData.controls.dearness_fee.value == ''){
       formData.controls.dearness_fee.value = 0;
     }
    if(formData.controls.dev_fee.value == ''){
       formData.controls.dev_fee.value = 0;
     }
     if(formData.controls.elec_fee.value == ''){
       formData.controls.elec_fee.value = 0;
     }
     if(formData.controls.lib_fee.value == ''){
       formData.controls.lib_fee.value = 0;
     }
     if(formData.controls.lab_fee.value == ''){
       formData.controls.lab_fee.value = 0;
     }
     if(formData.controls.music_fee.value == ''){
       formData.controls.music_fee.value = 0;
     }
     if(formData.controls.annual_func_fee.value == ''){
       formData.controls.annual_func_fee.value = 0;
     }
     if(formData.controls.exam_fee.value == ''){
       formData.controls.exam_fee.value = 0;
     }
     if(formData.controls.sclass.value == ''){
       formData.controls.sclass.value = 0;
     }
     if(formData.controls.tution_fee.value == ''){
       formData.controls.tution_fee.value = 0;
     }

     if(formData.controls.acti_fee.value == ''){
       formData.controls.acti_fee.value = 0;
     }
     if(formData.controls.late_fee.value == ''){
       formData.controls.late_fee.value = 0;
     }
      let depositeAmt = +(formData.controls.pre_bal.value ) + (formData.controls.form_chrgs.value) + (formData.controls.adm_fee.value) + (formData.controls.dearness_fee.value)  + (formData.controls.dev_fee.value)
     + (formData.controls.elec_fee.value) + (formData.controls.lib_fee.value) + (formData.controls.lab_fee.value) + (formData.controls.music_fee.value)
     + (formData.controls.annual_func_fee.value) + (formData.controls.exam_fee.value) + (formData.controls.sclass.value) + (formData.controls.tution_fee.value)  + (formData.controls.acti_fee.value)  + (formData.controls.late_fee.value);
     this.sum = depositeAmt;
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
    console.log("sno: ",response);
    this.sn_number = response;
    //this.sessiont = '2019-20'
  })
}

getAutoStudentSelect = (stdInfo) => {
  console.log("getAutoStudentSelect: ",stdInfo.option.value);
  let splitted = (stdInfo.option.value).split("-");
  console.log("splitted: ",splitted);
  this.roll_no = splitted[1];
}

test = (classVal,feeType) =>  {
console.log("test1: "+classVal.control.value);
let selectedClass = classVal.control.value;
this.annualFee = this.biAnnualFee = this.quaterlyFee= this.admissionFee = 0;
this.spinnerService.show();
this.rest.getFeeForReceipt(selectedClass,feeType).then((response) => {
      console.log("resp: ",response);
      console.log("dam_fee "+response[0]['admission_fee']);

      if(feeType == 0){
        this.annualFee = response[0]['annual_fee'];
        this.remainingFee = 0;
        this.admissionFee = response[0]['admission_fee'];
        console.log("annualFee: "+this.admissionFee);
      }
      if(feeType == 1){
        this.biAnnualFee = (response[0]['bi_annual_fee'])/2;
        console.log("biAnnualFee: "+this.biAnnualFee);
        this.remainingFee = this.biAnnualFee;
        this.admissionFee = response[0]['admission_fee'];
         console.log("biAnnualFee: "+this.admissionFee);
      }
      if(feeType == 2) {
        this.quaterlyFee = (response[0]['quaterly_fee'])/3;
        console.log("quaterlyFee: "+this.quaterlyFee);
        this.remainingFee = (this.quaterlyFee)*2;
        this.admissionFee = response[0]['admission_fee'];
         console.log("quaterlyFee: "+this.admissionFee);
      }
       // this.spinnerService.hide();


    });
}
}
