import { Component, OnInit } from '@angular/core';
import { CLASSES } from '../class';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { RestService} from '../rest.service';
import  { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.css']
})
export class FeeStructureComponent implements OnInit {
classData = CLASSES ;
form : FormGroup;
new_student = "New Student";
  constructor(public rest:RestService,private spinner : Ng4LoadingSpinnerService) { }

  ngOnInit() {
  	this.new_student = "New Student";
		this.form = new FormGroup({
		'class' : new FormControl('',{
		validators:[Validators.required]
		}),
		'student' : new FormControl('',{
		validators:[Validators.required]
		}),
		'quaterly_fee' : new FormControl('',{
		validators:[Validators.required]
		}),
		'bi_annual_fee' : new FormControl('',{
		validators:[Validators.required]
		}),
		'annual_fee' : new FormControl('',{
		validators:[Validators.required]
		}),
		'admission_fee' : new FormControl('',{
		validators:[Validators.required]
		})
		});
    }

    submitFee() {
     if(this.form.invalid){
      this.ngOnInit();
    }else{
    	this.spinner.show();
        console.log("fee add... ",this.form.value);
        this.rest.postFee(this.form.value).then((response) => {
       // this.openDialog();
        alert("Fee added. !!");
        this.spinner.hide();
        this.form.reset();
    });
  }
}
}
