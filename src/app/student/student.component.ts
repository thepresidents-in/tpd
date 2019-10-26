import { Component, OnInit, Inject } from '@angular/core';
import { RestService} from '../rest.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { CLASSES } from '../class';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';

export interface DialogData {
  studentId;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	studentData: any = {};
	classData : any[] ;
	studentTypeData : any[] ;
	subjectData : any[] ;
  form: FormGroup;
  imagePreview: string;
  minDate = new Date(2000, 0, 1);
  maxDate :any;
  discount:Number;

  constructor(public rest:RestService,private route: ActivatedRoute,private router: Router,public dialog : MatDialog ,public datePipe:DatePipe) { }

  ngOnInit() {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 1);
    this.maxDate = now.toISOString().slice(0,10);
    this.form = new FormGroup({
      'first_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z ]*")]
      }),
      'last_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3),Validators.pattern("^[a-zA-Z]*")]
      }),
      'father_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z ]*")]
      }),
      'mother_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z ]*")]
      }),
      'address' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(10)]
      }),
       'gender' : new FormControl('',{
        validators:[Validators.required]
      }),
        'contact_number' : new FormControl('',{
        validators:[Validators.required, Validators.maxLength(10), Validators.pattern("[6-9]\\d{9}")]
      }),
         'email' : new FormControl('',{validators:[Validators.required, Validators.pattern("[^ @]*@[^ @]*")]
      }),
          'dob' : new FormControl('',{
        validators:[Validators.required]
      }),
           'class' : new FormControl('',{
        validators:[Validators.required]
      }),
        'adhaar_no' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(12), Validators.maxLength(12)]
      }),
             'father_occupation' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(6)]
      }),
             'father_qualification' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(2)]
      }),
             'only_child' : new FormControl('',{
        validators:[Validators.required]
      }),
              'annual_income' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(4)]
      }),
        'category' : new FormControl('',{
        validators:[Validators.required]
      }),
        'mother_qualification' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(2)]
      }),
        'student_type' : new FormControl('',{
        validators:[Validators.required]
      }),
        'handicapped' : new FormControl('',{
        validators:[Validators.required]
      }),
         'mother_occupation' : new FormControl('',{
        validators:[Validators.required]
      }),
        'contact_number2' : new FormControl('',{
        validators:[Validators.required, Validators.maxLength(10), Validators.pattern("[6-9]\\d{9}")]
      }),
        'minority' : new FormControl('',{
        validators:[Validators.required]
      }),
        'idNumber' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(6)]
      }),
        'discount' : new FormControl('', {
        validators:[Validators.minLength(2),Validators.maxLength(4), Validators.pattern("[1-9]\\d{3}")]
      }),
        'hindi' : new FormControl(''),
        'sanskrit' : new FormControl(''),
        'medieval_history' : new FormControl(''),
        'home_science' : new FormControl(''),
        'pedagogy' : new FormControl(''),
        'sociology' : new FormControl(''),
        'political_science' : new FormControl(''),
    });


      this.classData = [{value :'BA-1'},{value :'BA-2'}, {value :'BA-3'}];
      this.studentTypeData = [{value :'Regular'},{value :'Private'}, {value :'Ex'}, {value:'Single Subject'}];
      this.subjectData = [{value :'हिंदी'},{value :'संस्कृत'}, {value :'मध्य कालीन इतिहास'}, {value:'गृह विज्ञान'}, {value:'शिक्षा शास्'}, {value:'समाज शास्त्र'}, {value:'राजनीती शास्'}];


  }

  ngOnDestroy() {
  }

  submitStudent() {
     if(this.form.invalid){
      alert("Please fill all mandatory fields.");
      return false;
    }else{
        this.form.value.dob= this.datePipe.transform(this.form.value.dob, 'yyyy-MM-dd');
        console.log("student add... ",this.form.value);
        this.rest.postStudent(this.form.value).then((response) => {
        this.openDialog();
        console.log("Student added. !!");
        this.form.reset();
    });
  }
}

openDialog() {
    const dialogRef = this.dialog.open(SaveDialogContent);
  }

}

@Component({
  selector: 'save-dialog',
  templateUrl: '../save_dialog.html',
})
export class SaveDialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,public router: Router) {}
}
