import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import * as jsPDF from 'jspdf';

declare var $:any;
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

	constructor(private route: ActivatedRoute,private rest: RestService,private spinner: Ng4LoadingSpinnerService) {
	}
  
  ngOnInit() {
  	this.spinner.show();
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
			  this.spinner.hide();
		  })
		});

		

		
    }
    downloadPDF() {
    	
    	var doc = new jsPDF();
		var specialElementHandlers = {
		'#content': function (element, renderer) {
		 return true;
		}
		};
		 var source = document.getElementById("content");
			doc.fromHTML(source, 15, 15, {
			'width': 170,
			'elementHandlers': specialElementHandlers
			});
			doc.save('kvfile.pdf');
    }

    printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
       let w=window.open();
        w.document.write(printContents);
        w.print();
        w.close();
    }
}