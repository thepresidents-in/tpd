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
IncomeCat;
ExpenseCat;
categoryData;
  constructor(public rest:RestService, public datePipe:DatePipe) { }

  ngOnInit() {
    this.form = new FormGroup({
        'date' : new FormControl('',{
        validators:[Validators.required]
      }),
        'category' : new FormControl('',{
        validators:[Validators.required]
      }),
        'type' : new FormControl('',{
        validators:[Validators.required]
      }),
        'amount' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(2)]
      }),
       'description' : new FormControl(''),
    });

    this.IncomeCat = [{value:'BA-1'},
        {value:'BA-2'},
        {value:'BA-3'},
        {value:'Scholarship Form'},
        {value:'Practicle File'},
        {value:'MLA\'s / MP\'s Fund'},
        {value:'Load / Credit'},
        {value:'Honourable People'},
        {value:'Chairman\'s Fund'},
        {value:'Others'}
    ]

    this.ExpenseCat = [{value:'PNB Patherwa'},
        {value:'Purwanchal Bank Patherwa'},
        {value:'Central Bank Tamkuhi'},
        {value:'Salary'},
        {value:'Examination'},
        {value:'Food'},
        {value:'Construction'},
        {value:'Maintainance'},
        {value:'University'},
        {value:'Challan'},
        {value:'Technology/Communication'},
        {value:'Stationary'},
        {value:'Oil'},
        {value:'Loan'},
        {value:'To Chairman'},
        {value:'Others'}
    ]
  }

  onChangeType(newVal){
    this.categoryData = this[newVal+'Cat']
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
