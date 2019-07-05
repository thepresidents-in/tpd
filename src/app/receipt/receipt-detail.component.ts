import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.component.html',
  styleUrls: ['./receipt.component.css']
})

export class ReceiptDetailComponent {
	receiptId: string;
	receiptDetail:any;
	studentDetail:any;
	total:number;
	constructor(private route: ActivatedRoute,private rest: RestService) {
	}
  
  ngOnInit() {
		this.route.params.subscribe(params => {
		this.receiptId =  params['id'];
		});

		this.rest.getReceiptById(this.receiptId).then((receiptDetails) => {
		this.receiptDetail = receiptDetails;
		this.total = receiptDetails[0]['admission_fee']+receiptDetails[0]['fee'];
		console.log("res details KV: ",this.receiptDetail);
		console.log("res details roll_no: "+receiptDetails[0]['roll_no']);
		this.rest.selectAllByClassAndRollNum(receiptDetails[0]['class'],parseInt(receiptDetails[0]['roll_no'])).then((studentDetails) =>{
			this.studentDetail = studentDetails;
			  console.log("studentDetails: ",studentDetails);
		  })
		});
    }
}