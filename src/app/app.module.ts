import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { StudentComponent,SaveDialogContent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/book.component';
import { ListBookComponent } from './books/viewBook.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RestService } from './rest.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSelectModule,MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule,MatTabsModule,MatTooltipModule,MatSortModule,MatAutocompleteModule,MatPaginatorModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import { ListStudentComponent,DialogContent } from './list-student/list-student.component';
import { MatTableModule} from '@angular/material/table';


import { MatDialogModule } from '@angular/material/dialog';

import { EditStudentComponent } from './edit-student/edit-student.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceViewComponent } from './attendance/attendanceView.component';
import { LibraryComponent } from './library/library.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student/studentDetail.component';
import { ListReceiptComponent,receiptDialogContent } from './receipt/list-receipt.component';
import { EditReceiptComponent } from './receipt/edit-receipt.commponent';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AuthGuard } from './auth/auth.guard';
import { ReceiptDetailComponent } from './receipt/receipt-detail.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { FeeListComponent,FeeDialogContent } from './fee-structure/fee-list.component';
import { ClassAddComponent } from './student/class_add.component';
import { CollegeReceiptComponent } from './college-receipt/college-receipt.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ExpensesComponent } from './expenses/expenses.component';

//import { MatDatepickerModule }  from "@angular/material/datepicker";
const appRoutes: Routes =[
{
	/*path: '',
	redirectTo: '/',
  pathMatch: 'full'*/
  path: '',
  component: LoginComponent
},
{
	path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path : 'liststudent',
  component: ListStudentComponent,
  canActivate: [AuthGuard]
},

{ path: 'student/:id', 
  component: EditStudentComponent,
  canActivate: [AuthGuard] 
},
{
  path : 'receipt',
  component: ReceiptComponent,
  canActivate: [AuthGuard]
},
{
  path : 'receiptList',
  component: ListReceiptComponent,
  canActivate: [AuthGuard]
},
{ path: 'editReceipt/:id', 
  component: EditReceiptComponent,
  canActivate: [AuthGuard] 
},
{
  path : 'bookAdd',
  component: BooksComponent
},
{
  path : 'bookView',
  component: ListBookComponent
},
{
  path : 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path : 'attendance',
  component: AttendanceComponent,
  canActivate: [AuthGuard]
},
{
  path : 'attendanceView',
  component: AttendanceViewComponent,
  canActivate: [AuthGuard]
},
{
  path : 'issueBook',
  component: LibraryComponent
},
{
  path : 'issuedBooksView',
  component: LibraryComponent
},
{
  path : 'dashboard',
  component: DashboardComponent
},
{
  path : 'studentDetail/:id',
  component: StudentDetailComponent
},
{
  path : 'receiptDetail/:id',
  component: ReceiptDetailComponent,
  canActivate: [AuthGuard]
},
{
  path : 'fee_structure',
  component: FeeStructureComponent,
  canActivate: [AuthGuard]
},
{
  path : 'feeList',
  component: FeeListComponent,
  canActivate: [AuthGuard]
},
{
  path : 'classAdd',
  component : ClassAddComponent
},
{
  path : 'college_receipt',
  component : CollegeReceiptComponent
}, 
{
  path : 'college_receiptList',
  component : CollegeReceiptComponent
}

];



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    ListStudentComponent,

    EditStudentComponent,

    ReceiptComponent,
    DialogContent,
    BooksComponent,
    ListBookComponent,
    HomeComponent,
    AttendanceComponent,
    AttendanceViewComponent,
    LibraryComponent,
    SaveDialogContent,
    DashboardComponent,
    StudentDetailComponent,
    ListReceiptComponent,
    EditReceiptComponent,
    ReceiptDetailComponent,
    FeeStructureComponent,
    FeeListComponent,
    FeeDialogContent,
    receiptDialogContent,
    ClassAddComponent,
    CollegeReceiptComponent,
    ExpensesComponent

  ],
  imports: [
  RouterModule.forRoot(
  	appRoutes,
  	{
  		enableTracing: true }
  	),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSortModule,
    MatAutocompleteModule,
    Ng4LoadingSpinnerModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   

  ],
  providers: [DatePipe,
  AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [DialogContent,SaveDialogContent,FeeDialogContent,receiptDialogContent]
})
export class AppModule { }
