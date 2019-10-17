import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA ,MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

export interface DialogData {
  expenseId;
}

@Component({
  selector: 'app-listexpenses',
  templateUrl: './listexpenses.component.html',
  styleUrls: ['./listexpenses.component.css']
})
export class ListexpensesComponent implements OnInit {
  expenseList;
  dataSource ;
  displayedColumns = ['date','type','expense','description','del'];


    constructor( public rest: RestService, public dialog: MatDialog ,private spinnerService: Ng4LoadingSpinnerService) {}
   openDialog(expenseData) {
     console.log('anp exo', expenseData)
      const dialogRef = this.dialog.open(ExpenseDialogContent, {
        data: {
          uId: expenseData.uId
        }
      });
      dialogRef.afterClosed().subscribe(result => {});
    }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
      this.spinnerService.show();
      this.rest.getExpenses().then((response) => {
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
    templateUrl: 'delete_dialog.html',
  })
  export class ExpenseDialogContent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,private router: Router) {}
    deleteExpense(id) {
      console.log('anp id', id)
       this.rest.delete("expenses",id).then((response) => {
         alert("Expense deleted.");
         this.router.navigate(['/expenses']);
      });
    }
  }
