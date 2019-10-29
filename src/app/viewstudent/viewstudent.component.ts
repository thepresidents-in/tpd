import { Component, OnInit ,Inject,Input,ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RestService } from '../rest.service';
import { DatePipe } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MatDialog, MAT_DIALOG_DATA ,MatTableDataSource,MatSort,MatPaginator} from '@angular/material';

export interface DialogData {
  receiptId;
}

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})

export class ViewstudentComponent implements OnInit {
	studentData: any[];
  dataSource;
  deposited:Number;
  displayedColumns = ['srno', 'idNumber','first_name','class','date','submittedFee','uId', 'del'];

	constructor(public datePipe : DatePipe, private route: ActivatedRoute,private rest: RestService,private spinnerService: Ng4LoadingSpinnerService,private router: Router,public dialog: MatDialog){ }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
		this.spinnerService.show();
		this.route.params.subscribe(params => {
        this.rest.getStudentsById(params['id']).then((response) => {
          this.studentData = response ;
          console.log("studentData detail :",this.studentData);
          return response
        })
        .then((data)=>{
          return this.rest.getCollegeReceiptByParam('idNumber', data[0].idNumber)
        })
        .then((response) => {
        console.log("res KV: ",response);
        this.deposited = this.getFeeSum(response);
        this.dataSource = new MatTableDataSource(response);
        console.log("dataSource mat:",this.dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        return this.spinnerService.hide();
      });
    });
	}

  getFeeSum(dataArr) {
    console.log('anp srr', dataArr)
    let fee = 0;
    let sumOfFee = (dataArr).map(function (row, idx) {
        fee += +row.submittedFee;
    });
    return fee;
  }

  openDialog(receiptData) {
   console.log("receiptData console: ",receiptData);
    const dialogRef = this.dialog.open(ViewstudentDialogContent, {
      data: {
        receiptId: receiptData.uId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log("Dialog result: ",result);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

 }

 @Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'delete_receipt_dialog.html',
})

 export class ViewstudentDialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,private router: Router) {}
  deleteReceipt(id) {
   console.log("delete receipt : "+id);
     this.rest.delete("college_receipt",id).then((response) => {
       alert("receipt deleted.");
       this.router.navigate(['/college_receiptList']);
    });
  }
}
