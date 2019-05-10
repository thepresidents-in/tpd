import { Component,OnInit,ViewChild,Inject } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA ,MatTableDataSource,MatSort} from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  feeId;
}
@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-structure.component.css']
})


export class FeeListComponent {
	displayedColumns = ['class','quaterly_fee','bi_annual_fee','annual_fee','admission_fee','uId'];
	dataSource ;
	constructor(private rest: RestService,private spinnerService: Ng4LoadingSpinnerService,public dialog: MatDialog) {}

	openDialog(feeData) {
    console.log("feeData console: ",feeData);
    const dialogRef = this.dialog.open(DialogContent, {
      data: {
        feeId: feeData.uId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log("Dialog result: ",result);
    });
  }

@ViewChild(MatSort) sort: MatSort;
	ngOnInit() {
    this.spinnerService.show();
    this.rest.getFee().then((response) => {
    console.log("fee KV: ",response);
    
    this.dataSource = new MatTableDataSource(response);
    console.log("dataSource mat:",this.dataSource);
    this.dataSource.sort = this.sort;
    this.spinnerService.hide();
  });
    
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'delete_dialog.html',
})
export class DialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,private router: Router) {}
  deleteFee(id) {
   console.log("delete : "+id);
     this.rest.delete("fee",id).then((response) => {
       alert("Student deleted.");
       this.rest.getFee().then((response) => {
    console.log("res KV getFee: ",response);

});
       this.router.navigate(['/feeList']);
    });
  }
}