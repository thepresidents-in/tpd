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
    this.IncomeCat = [{name:'BA-1'},
        {name:'BA-2'},
        {name:'BA-3'},
        {name:'Scholarship Form'},
        {name:'Practicle File'},
        {name:'MLA\'s / MP\'s Fund'},
        {name:'Load / Credit'},
        {name:'Honourable People'},
        {name:'Chairman\'s Fund'},
        {name:'Others'}
    ]

    this.ExpenseCat = [{name:'PNB Patherwa'},
        {name:'Purwanchal Bank Patherwa'},
        {name:'Central Bank Tamkuhi'},
        {name:'Salary'},
        {name:'Examination'},
        {name:'Food'},
        {name:'Construction'},
        {name:'Maintainance'},
        {name:'University'},
        {name:'Challan'},
        {name:'Technology/Communication'},
        {name:'Stationary'},
        {name:'Oil'},
        {name:'Loan'},
        {name:'To Chairman'},
        {name:'Others'}
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
