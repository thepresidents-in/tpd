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
	classData = CLASSES ;
  form: FormGroup;
  imagePreview: string;
  minDate = new Date(2000, 0, 1);
  maxDate :any;

  constructor(public rest:RestService,private route: ActivatedRoute,private router: Router,public dialog : MatDialog ,public datePipe:DatePipe) {
  	/*this.rest.getClasses().subscribe((response) => {
    console.log("res KV class: ",response);
    this.classData = response;
    });*/
  }

  ngOnInit() {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 1);
    this.maxDate = now.toISOString().slice(0,10);
    this.form = new FormGroup({
      'first_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3)]
      }),
      'last_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3)]
      }),
      'father_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3)]
      }),
      'mother_name' : new FormControl('',{
        validators:[Validators.required, Validators.minLength(3)]
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
           /*'image' : new FormControl('',{
             validators:[Validators.required]
           }),*/
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
        'religion' : new FormControl('',{
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
          'miniority' : new FormControl('',{
        validators:[Validators.required]
      }),
    })
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
 onImagePicked(event:Event){
   const file = (event.target as HTMLInputElement).files[0];
   this.form.patchValue({image:file});
   this.form.get('image').updateValueAndValidity();
   const reader = new FileReader();
   reader.onload = () => {
     this.imagePreview = reader.result;
   };
   reader.readAsDataURL(file);

 }

  submitStudent() {
     if(this.form.invalid){
      this.ngOnInit();
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

_keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
}

@Component({
  selector: 'save-dialog',
  templateUrl: '../save_dialog.html',
})
export class SaveDialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: RestService,public router: Router) {}
  //this.router.navigate(['/liststudent']);
}
