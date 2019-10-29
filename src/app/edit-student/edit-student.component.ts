import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,Validators} from '@angular/forms';
import { RestService } from '../rest.service';
import { ConstantsService} from '../constants/constants.service';
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
    constants:any;
    minDate = new Date(2000, 0, 1);
    maxDate :any;
    subjectList:any=[];

  constructor(public constantsService: ConstantsService, public rest: RestService,private route:  ActivatedRoute,private router: Router ,public datePipe: DatePipe) { }

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
          this.constants = this.constantsService.getConstants();
          (this.constants.subjectData).map((item,index) =>{
            let element={};
            element['sub'+index] = item['value'];
            element['subname'] = item['value'];
            let val = this.studentData[0][item['value']]
            element['checked'] = val ? val : false;
            this.subjectList.push(element);
          });
        });
    });

  }

   submitEditStudent(form: NgForm) {
    if(form.invalid){
      return;
    }
    console.log("edit form :",form);
    let keys = Object.keys(form.controls);
    form.value.dob= this.datePipe.transform(form.value.dob, 'yyyy-MM-dd');
    console.log('anp val', form.value);
    this.rest.update('students',this.editStudentId,form.value).then((response) => {
       alert("Student Edited !!");
       this.router.navigate(['/liststudent']);
    });
  }
}
