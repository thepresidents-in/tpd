import { Component, OnInit,Inject } from '@angular/core';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl,Validators,FormGroup ,NgForm} from '@angular/forms';


export interface DialogData {
  studentId;
}

@Component({
  selector: 'edit-receipt',
  templateUrl: './edit-receipt.commponent.html',
  styleUrls: ['./receipt.component.css']
})
export class EditReceiptComponent implements OnInit {
editReceiptData ;
edirReceiptId;
sum:number =0;
private sub : any;
displayedColumns = ['roll_number','first_name','father_name','mother_name','class','dob','uId'];

  constructor( public rest: RestService, public dialog: MatDialog,public route : ActivatedRoute,public router : Router) {
  }
  ngOnInit(){
  	this.sub = this.route.params.subscribe(params => {
  	console.log("std id: "+[params['id']]);
  	this.edirReceiptId = params['id'];
		this.rest.getReceiptById('receipt',params['id']).then((response) => {
		console.log("res KV: ",response);
		this.editReceiptData = response ;
		console.log("editReceiptData receipt :",this.editReceiptData);
		});
  });
}

updateStudentFee(form: NgForm){
  	if(form.invalid){
  		return;
  	}
  	console.log("update form: ",form);
  	if(this.sum > 0){
      form.controls.amt_deposite.setValue(this.sum);
  	}
  	console.log("update form2: ",form);
	/*this.rest.update('receipt',this.edirReceiptId,form.value).then((response) => {
       alert("Receipt added. !!");
       this.router.navigate(['/receiptList']);
    });*/
}

}