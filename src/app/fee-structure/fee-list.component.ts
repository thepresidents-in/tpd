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
    const dialogRef = this.dialog.open(FeeDialogContent, {
      data: {
        feeId: feeData.uId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

@ViewChild(MatSort) sort: MatSort;
	ngOnInit() {
    this.spinnerService.show();
    this.rest.getFee().then((response) => {
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.sort = this.sort;
    this.spinnerService.hide();
  });
    
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'delete_dialog.html',
})
export class FeeDialogContent {
  displayedColumns = ['class','quaterly_fee','bi_annual_fee','annual_fee','admission_fee','uId'];
  dataSource ;
  @ViewChild(MatSort) sort: MatSort;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,private router: Router,private spinnerService: Ng4LoadingSpinnerService) {}
  deleteFee(id) {
       this.rest.delete("fee",id).then((response) => {
       alert("Student deleted.");
       this.spinnerService.show();
       this.dataSource ='';
       this.rest.getFee().then((response) => {
       this.dataSource = new MatTableDataSource(response);
       this.dataSource.sort = this.sort;
       this.spinnerService.hide();
       });
       this.router.navigate(['/feeList']);
    });
  }
}