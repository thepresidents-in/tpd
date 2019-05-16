import { Component, OnInit,OnChanges } from '@angular/core';
import { RestService } from '../rest.service';
import { CLASSES } from '../class';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './viewAttendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceViewComponent {
    classData = CLASSES;
	classId;
	dataSource;
	displayedColumns = ['roll_number','first_name','last_name','action'];
	todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
	presentAction: number =0;
	absentAction : number =0;
	leaveAction : number =0;
constructor(private rest:RestService,private datePipe:DatePipe){};
public getClassName(id): void {
this.classId = id;
console.log("getClassName:"+this.todayDate);
this.dataSource='';
    this.rest.getAttendanceByClass("student_attendance",this.classId,this.todayDate).then((response) => {
    	console.log("GET: ",response);
		 this.dataSource = response;
		 for(let i=0; i<=[response].length; i++){
		 	if(response[i].action == 'A'){
		 		this.absentAction += parseInt("01");
		 	}else if(response[i].action == 'L'){
		 		this.leaveAction += parseInt("01");
		 	}else {
		 		this.presentAction += parseInt("01");
		 	}
		 }
	});
}
public getSearchDate(searchDate): void {
	
	this.todayDate = this.datePipe.transform(searchDate, 'yyyy-MM-dd');
	console.log("getSearchDate:"+this.todayDate);
	this.getClassName(this.classId);

}

}
