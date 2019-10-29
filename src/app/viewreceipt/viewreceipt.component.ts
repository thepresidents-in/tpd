import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import * as jsPDF from 'jspdf';

declare var $:any;
@Component({
  selector: 'app-viewreceipt',
  templateUrl: './viewreceipt.component.html',
  styleUrls: ['./viewreceipt.component.css']
})

export class ViewReceiptComponent {
	receiptId: string;
	receiptDetail:any;
	studentDetail:any;
	total:number;

	constructor(private route: ActivatedRoute,private rest: RestService,private spinner: Ng4LoadingSpinnerService) {
	}

  ngOnInit() {
  	this.spinner.show();
		this.route.params.subscribe(params => {
		this.receiptId =  params['id'];
		});

		this.rest.getReceiptById('college_receipt', this.receiptId).then((receiptDetails) => {
    console.log('anp receipt', receiptDetails)
		this.receiptDetail = receiptDetails;
		this.total = receiptDetails[0]['submittedFee'];

		this.rest.getReceiptById('students',receiptDetails[0]['student_uId']).then((studentDetails) =>{
			this.studentDetail = studentDetails;
			  this.spinner.hide();
		  })
		});

    }
}
