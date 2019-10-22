import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { MatDialog, MAT_DIALOG_DATA ,MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
declare var $:any;

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
  displayedColumns = ['srno', 'date','type','expense','description','del'];
  expenseSum:Number;


    constructor( public rest: RestService, public dialog: MatDialog ,private spinnerService: Ng4LoadingSpinnerService,private datePipe: DatePipe) {}
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
      let res=0;
      console.log("kv datasource: ",this.dataSource.filteredData);
      this.expenseSum = this.getExpenseSum(this.dataSource.filteredData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.spinnerService.hide();
    });
    }
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      this.expenseSum = this.getExpenseSum(this.dataSource.filteredData);
    }
    get_to_date(event){
       let to_date= this.datePipe.transform(event, 'yyyy-MM-dd');
       let from_date = this.datePipe.transform($('#from_date').val(), 'yyyy-MM-dd');
       console.log("from date: "+from_date);
       this.filteredDataByDate('expenses',from_date,to_date);
    }
    get_from_date(event) {
       let from_date= this.datePipe.transform(event, 'yyyy-MM-dd');
       let  to_date = this.datePipe.transform($('#to_date').val(), 'yyyy-MM-dd');
       console.log("to_date date: "+to_date);
       this.filteredDataByDate('expenses',from_date,to_date);
    }
    filteredDataByDate(tableName,from_date,to_date) {
       this.rest.getFilterDataByDate(tableName,from_date,to_date).then((response) => {
      /*this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.spinnerService.hide();*/
      this.dataSource = new MatTableDataSource(response);
      this.expenseSum = this.getExpenseSum(this.dataSource.filteredData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      });
    }
    getExpenseSum(arr_expense) {
      let res=0;
      var sumOfExpense = (arr_expense).map(function (num, idx) {
      console.log(num.expense);
      res += +num.expense;
      });
      return res;
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
