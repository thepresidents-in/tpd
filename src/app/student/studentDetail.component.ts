import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-student-detail',
  templateUrl: './studentDetail.component.html',
  styleUrls: ['./studentDetail.component.css']
})

export class StudentDetailComponent implements OnInit {
	studentData: any[];
	constructor(private route: ActivatedRoute,private rest: RestService,private spinnerService: Ng4LoadingSpinnerService){
	console.log("StudentDetailComponent");
}
	ngOnInit() {
		this.spinnerService.show();
		this.route.params.subscribe(params => {
        console.log("std id: "+[params['id']]);
        this.rest.getStudentsById(params['id']).then((response) => {
          console.log("res KV: ",response);
          this.studentData = response ;
          console.log("studentData detail :",this.studentData);
          this.spinnerService.hide();
        });
    });
	}
	
}