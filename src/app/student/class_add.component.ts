import { Component, OnInit, Inject } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class_add.component.html',
  styleUrls: ['./student.component.css']
})
export class ClassAddComponent implements OnInit {
   form: FormGroup;
  constructor(public rest:RestService,private router: Router) {}
  ngOnInit() {
    this.form = new FormGroup({
      'class_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(2)]
      })
    })
  }
  ngOnDestroy() {}
  submitClass() {
    if(this.form.invalid){
      this.ngOnInit();
      alert("Please insert class name.");
    }else{
      this.rest.postClass(this.form.value).then((response) => {
      alert("class added. !!");
      this.form.reset();
      });
    }
  }
}

