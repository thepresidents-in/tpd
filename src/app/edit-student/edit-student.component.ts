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
    classData : any;
    studentTypeData: any;
    subjectData:any;
    minDate = new Date(2000, 0, 1);
    maxDate :any;

  constructor(public rest: RestService,private route:  ActivatedRoute,private router: Router ,public datePipe: DatePipe) { }

  ngOnInit() {
    let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd') ;
    const now = new Date();
    now.setFullYear(now.getFullYear() - 1);
    this.maxDate = now.toISOString().slice(0,10);
    this.sub = this.route.params.subscribe(params => {
        console.log("std id: "+[params['id']]);
        this.editStudentId = params['id'];
        this.rest.getStudentsById(params['id']).then((response) => {
          console.log("res KV: ",response);
          this.studentData = response ;
          console.log("studentData edit :",this.studentData);
        });
    });

    this.classData = [{value :'BA-1'},{value :'BA-2'}, {value :'BA-3'}];
    this.studentTypeData = [{value :'Regular'},{value :'Private'}, {value :'Ex'}, {value:'Single Subject'}];
    this.subjectData = [{value :'हिंदी'},{value :'संस्कृत'}, {value :'मध्य कालीन इतिहास'}, {value:'गृह विज्ञान'}, {value:'शिक्षा शास्'}, {value:'समाज शास्त्र'}, {value:'राजनीती शास्'}];

  }

   submitEditStudent(form: NgForm) {
    if(form.invalid){
      return;
    }
    console.log("edit form :",form);
    let keys = Object.keys(form.controls);
    form.value.dob= this.datePipe.transform(form.value.dob, 'yyyy-MM-dd');
    let values = Object.values(form.value);
    this.rest.update('students',this.editStudentId,form.value).then((response) => {
       alert("Student Edited !!");
       this.router.navigate(['/liststudent']);
    });
  }
}
