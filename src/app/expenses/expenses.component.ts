import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RestService} from '../rest.service';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
form:FormGroup;
  constructor(public rest:RestService, public datePipe:DatePipe) { }

  ngOnInit() {
    this.form = new FormGroup({
        'date' : new FormControl('',{
        validators:[Validators.required]
      }),
        'type' : new FormControl('',{
        validators:[Validators.required]
      }),

        'expense' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(2)]
      }),
       'description' : new FormControl(''),
    });
  }

  submitExpense() {
    if(this.form.invalid){
      alert("Please fill all mandatory fields.");
    }else{
        this.form.value.date= this.datePipe.transform(this.form.value.date, 'yyyy-MM-dd');
        this.rest.postExpense(this.form.value).then((response) => {
          alert('Expense added')
          this.form.reset();
        });
  }
}

}
