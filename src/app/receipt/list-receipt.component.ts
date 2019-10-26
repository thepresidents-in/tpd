import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA ,MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

export interface DialogData {
  receiptId;
}

@Component({
  selector: 'app-list-receipt',
  templateUrl: './list-receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ListReceiptComponent implements OnInit {
	dataSource ;
displayedColumns = ['srno','session','class','roll_no','student_name','admission_fee','fee','remaining_fee','feeType','date','uId'];
constructor(public rest:RestService, public dialog: MatDialog,private router: Router, private spinnerService: Ng4LoadingSpinnerService){

}

openDialog(receiptData) {
   console.log("receiptData console: ",receiptData);
    const dialogRef = this.dialog.open(ReceiptDialogContent, {
      data: {
        receiptId: receiptData.uId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log("Dialog result: ",result);
    });
  }

  editReceipt(editReceiptId) {
    this.router.navigate(['/editReceipt', editReceiptId]);
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
ngOnInit() {
  this.spinnerService.show();
  this.rest.getReceipt().then((response) => {
    console.log("res KV: ",response);
    this.dataSource = response ;
    console.log("dataSource receipt :",this.dataSource);
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.spinnerService.hide();
});
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'delete_receipt_dialog.html',
})
export class ReceiptDialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,private router: Router) {}
  deleteReceipt(id) {
   console.log("delete receipt : "+id);
     this.rest.delete("receipt",id).then((response) => {
       alert("receipt deleted.");
       this.rest.getReceipt().then((response) => {
    console.log("res KV getReceipt: ",response);

});
       this.router.navigate(['/receiptList']);
    });
  }
}
