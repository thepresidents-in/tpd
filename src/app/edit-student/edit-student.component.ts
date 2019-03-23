import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,Validators} from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { CLASSES } from '../class';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
    studentData: any = [];
    editStudentId;
	private sub: any;
    editStudentData;
    classData = CLASSES ;

  constructor(public rest: RestService,private route:  ActivatedRoute,private router: Router) { }

  ngOnInit() {
  	
     this.sub = this.route.params.subscribe(params => {
    console.log("std id: "+[params['id']]);
    this.editStudentId = params['id'];
    this.rest.getStudentsById(params['id']).then((response) => {
    console.log("res KV: ",response);
    this.studentData = response ;
    console.log("studentData edit :",this.studentData);
    });
  });
  }

   submitEditStudent(form: NgForm) {
    if(form.invalid){
    return;
    }
    console.log("edit form :",form);
    let keys = Object.keys(form.controls);
    //form.value.dob = (form.value.dob).toString();
    let values = Object.values(form.value);
    //let classValue = Object.values(form.value.class) ;
    this.rest.update('students',this.editStudentId,form.value).then((response) => {
       alert("Student Edited !!");
       this.router.navigate(['/liststudent']);
    });
  }
}

