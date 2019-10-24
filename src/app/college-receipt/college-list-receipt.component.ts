import { Component, OnInit ,Inject,Input,ViewChild } from '@angular/core';
import { RestService} from '../rest.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MatDialog, MAT_DIALOG_DATA ,MatTableDataSource,MatSort,MatPaginator} from '@angular/material';

export interface DialogData {
  receiptId;
}
@Component({
  selector: 'app-college-list-receipt',
  templateUrl: './college-list-receipt.component.html',
  styleUrls: ['./college-receipt.component.css']
})
export class CollegeListReceiptComponent implements OnInit {
  dataSource;
  displayedColumns = ['srno', 'idNumber','first_name','class','date','submittedFee','uId', 'del'];
  constructor(public datePipe : DatePipe,public rest: RestService,private spinnerService: Ng4LoadingSpinnerService,private router: Router,public dialog: MatDialog) {}

@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
     this.spinnerService.show();
    this.rest.getCollegeReceipt().then((response) => {
    console.log("res KV: ",response);

    this.dataSource = new MatTableDataSource(response);
    console.log("dataSource mat:",this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.spinnerService.hide();
  });
  }
  openDialog(receiptData) {
   console.log("receiptData console: ",receiptData);
    const dialogRef = this.dialog.open(CollegeReceiptDialogContent, {
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
 export class CollegeReceiptDialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,private router: Router) {}
  deleteReceipt(id) {
   console.log("delete receipt : "+id);
     this.rest.delete("college_receipt",id).then((response) => {
       alert("receipt deleted.");
       this.router.navigate(['/college_receiptList']);
    });
  }
}
