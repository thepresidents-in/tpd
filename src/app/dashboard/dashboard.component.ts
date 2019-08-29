import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

data:any[];
receiptData:any[]
  constructor(private rest:RestService,private spinnerService:Ng4LoadingSpinnerService) { }

  ngOnInit() {
  	 this.rest.getRecentStudentData("students").then((response) => {
  	 //this.spinnerService.show();
     console.log("res KV: ",response);
     this.data = response;
    this.rest.getRecentStudentData("receipt").then((receiptResponse) => {
    console.log("receipt res : ",receiptResponse);
    this.receiptData = receiptResponse;
   // 
});
    
  });
  	 //this.spinnerService.hide();
  }

}
