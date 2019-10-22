import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { RestService } from '../rest.service';
import { FormControl,NgForm,Validators} from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-edit-college-receipt',
  templateUrl: './edit-college-receipt.component.html',
  styleUrls: ['./edit-college-receipt.component.css']
})
export class EditCollegeReceiptComponent implements OnInit {
receiptId:string;
receiptData : any[];
private sub:any;
classData : any;
 classValue:any;
  rollNum:any;
  discount:Number;
  submittedFee:any;
  studentList;
  admissionFee:number =5100;
  constructor(private route : ActivatedRoute,private rest: RestService,private router:Router,private spinner: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  	this.spinner.show();
  	 this.sub = this.route.params.subscribe(params => {
        console.log("std id: "+[params['id']]);
        this.receiptId = params['id'];
        this.rest.getReceiptById('college_receipt',params['id']).then((response) => {
          console.log("res KV: ",response);
          this.receiptData = response ;
          this.spinner.hide();
        });
    });
  	  this.rest.getClassData().then((response) => {
      console.log("class data: ",response);
      this.classData = response;
    });

  }

  EditReceipt(form:NgForm){
  	if(form.invalid){
      return;
    }
    console.log("edit form :",form);
    this.rest.update('college_receipt',this.receiptId,form.value).then((response) => {
       alert("Receipt Edited !!");
       this.router.navigate(['/college_receiptList']);
    });
  }

   getClass(formData){
    this.classValue = formData.controls.class.value;
    this.rest.getStudentsByClass(this.classValue).then((response) => {
    console.log("res KV: ",response);
    this.studentList = response;
  });
}

getStudentInfo(std){

}

}
