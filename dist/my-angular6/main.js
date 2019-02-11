(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover,\na:active {\n  color: lightgray;\n}\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 5px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label {\n  display: inline-block;\n  line-height: 30px;\n  margin: 0;\n  width: 85%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  <mat-sidenav-container>\n <mat-sidenav-content>\n   <mat-toolbar color=\"primary\">\n    <div fxHide.gt-xs>\n      <button mat-icon-button>\n       <mat-icon>menu</mat-icon>\n     </button>\n   </div>\n   <div>\n    <a>\n     Daksh International Daniyari\n   </a>\n </div>\n <div fxFlex fxLayout fxLayoutAlign=\"flex-end\"  fxHide.xs>\n   <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n     <li>\n       <a mat-list-item\n       [routerLink]=\"['/login']\">\n       <mat-icon>input</mat-icon>&nbsp;\n       <span  class=\"label\">Login</span>\n     </a>\n   </li>\n\n   <li [matMenuTriggerFor]=\"student\"  #matMenuTrigger1=\"matMenuTrigger\">\n     <a mat-list-item (mouseenter)=\"matMenuTrigger1.openMenu()\">\n       <mat-icon class=\"icon\">people</mat-icon>&nbsp;\n       <span class=\"label\">Student</span>\n     </a>\n     <mat-menu #student=\"matMenu\" (mouseleave)=\"matMenuTrigger1.closeMenu()\" [overlapTrigger]=\"false\">\n       <button mat-menu-item [routerLink]=\"['/student']\">Add Student</button>\n       <button mat-menu-item [routerLink]=\"['/liststudent']\">View Student</button>\n     </mat-menu>\n   </li>\n   <li [matMenuTriggerFor]=\"books\"  #matMenuTrigger3=\"matMenuTrigger\">\n     <a mat-list-item (mouseenter)=\"matMenuTrigger3.openMenu()\">\n       <mat-icon class=\"icon\">book</mat-icon>&nbsp;\n       <span class=\"label\">Books</span>\n     </a>\n     <mat-menu #books=\"matMenu\" (mouseleave)=\"matMenuTrigger1.closeMenu()\" [overlapTrigger]=\"false\">\n       <button mat-menu-item [routerLink]=\"['/bookAdd']\">Add Books</button>\n       <button mat-menu-item [routerLink]=\"['/bookView']\">View Books</button>\n     </mat-menu>\n   </li>\n\n   <li [matMenuTriggerFor]=\"receipt\" #matMenuTrigger2=\"matMenuTrigger\">\n     <a mat-list-item (mouseenter)=\"matMenuTrigger2.openMenu()\">\n       <mat-icon class=\"icon\">receipt</mat-icon>&nbsp;\n       <span class=\"label\">Receipt</span>\n     </a>\n     <mat-menu #receipt=\"matMenu\" (mouseleave)=\"matMenuTrigger2.closeMenu()\" [overlapTrigger]=\"false\">\n       <button mat-menu-item [routerLink]=\"['/receipt']\">Add Receipt</button>\n       <button mat-menu-item [routerLink]=\"['/receiptView']\">View Receipt</button>\n     </mat-menu>\n   </li>\n\n <li>\n   <a  mat-list-item\n   [routerLink]=\"['/']\">\n   <mat-icon class=\"icon\">dashboard</mat-icon>&nbsp;\n   <span class=\"label\">Dashboard</span>\n </a>\n</li>\n<li>\n <a>\n   <mat-icon class=\"icon\">input</mat-icon>&nbsp;\n   <span class=\"label\">LogOut</span>\n </a>\n</li>\n</ul>\n</div>\n</mat-toolbar>\n<main>\n</main>\n</mat-sidenav-content>\n</mat-sidenav-container>\n<router-outlet></router-outlet> -->\n\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-angular6';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _books_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books/book.component */ "./src/app/books/book.component.ts");
/* harmony import */ var _books_viewBook_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./books/viewBook.component */ "./src/app/books/viewBook.component.ts");
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receipt/receipt.component */ "./src/app/receipt/receipt.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_student_list_student_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-student/list-student.component */ "./src/app/list-student/list-student.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-student/edit-student.component */ "./src/app/edit-student/edit-student.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./attendance/attendance.component */ "./src/app/attendance/attendance.component.ts");
/* harmony import */ var _attendance_attendanceView_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./attendance/attendanceView.component */ "./src/app/attendance/attendanceView.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _student_studentDetail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./student/studentDetail.component */ "./src/app/student/studentDetail.component.ts");
/* harmony import */ var _receipt_list_receipt_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./receipt/list-receipt.component */ "./src/app/receipt/list-receipt.component.ts");
/* harmony import */ var _receipt_edit_receipt_commponent__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./receipt/edit-receipt.commponent */ "./src/app/receipt/edit-receipt.commponent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























//import { MatDatepickerModule }  from "@angular/material/datepicker";
var appRoutes = [
    {
        /*path: '',
        redirectTo: '/',
      pathMatch: 'full'*/
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'liststudent',
        component: _list_student_list_student_component__WEBPACK_IMPORTED_MODULE_16__["ListStudentComponent"]
    },
    { path: 'student/:id',
        component: _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_19__["EditStudentComponent"]
    },
    {
        path: 'receipt',
        component: _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__["ReceiptComponent"]
    },
    {
        path: 'receiptList',
        component: _receipt_list_receipt_component__WEBPACK_IMPORTED_MODULE_27__["ListReceiptComponent"]
    },
    { path: 'editReceipt/:id',
        component: _receipt_edit_receipt_commponent__WEBPACK_IMPORTED_MODULE_28__["EditReceiptComponent"]
    },
    {
        path: 'bookAdd',
        component: _books_book_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]
    },
    {
        path: 'bookView',
        component: _books_viewBook_component__WEBPACK_IMPORTED_MODULE_9__["ListBookComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
    },
    {
        path: 'attendance',
        component: _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__["AttendanceComponent"]
    },
    {
        path: 'attendanceView',
        component: _attendance_attendanceView_component__WEBPACK_IMPORTED_MODULE_23__["AttendanceViewComponent"]
    },
    {
        path: 'issueBook',
        component: _library_library_component__WEBPACK_IMPORTED_MODULE_24__["LibraryComponent"]
    },
    {
        path: 'issuedBooksView',
        component: _library_library_component__WEBPACK_IMPORTED_MODULE_24__["LibraryComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"]
    },
    {
        path: 'studentDetail/:id',
        component: _student_studentDetail_component__WEBPACK_IMPORTED_MODULE_26__["StudentDetailComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _list_student_list_student_component__WEBPACK_IMPORTED_MODULE_16__["ListStudentComponent"],
                _list_student_list_student_component__WEBPACK_IMPORTED_MODULE_16__["DialogContent"],
                _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_19__["EditStudentComponent"],
                _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_10__["ReceiptComponent"],
                _list_student_list_student_component__WEBPACK_IMPORTED_MODULE_16__["DialogContent"],
                _books_book_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"],
                _books_viewBook_component__WEBPACK_IMPORTED_MODULE_9__["ListBookComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__["AttendanceComponent"],
                _attendance_attendanceView_component__WEBPACK_IMPORTED_MODULE_23__["AttendanceViewComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_24__["LibraryComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_6__["SaveDialogContent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _student_studentDetail_component__WEBPACK_IMPORTED_MODULE_26__["StudentDetailComponent"],
                _receipt_list_receipt_component__WEBPACK_IMPORTED_MODULE_27__["ListReceiptComponent"],
                _receipt_edit_receipt_commponent__WEBPACK_IMPORTED_MODULE_28__["EditReceiptComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: true
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_list_student_list_student_component__WEBPACK_IMPORTED_MODULE_16__["DialogContent"], _student_student_component__WEBPACK_IMPORTED_MODULE_6__["SaveDialogContent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attendance/attendance.component.css":
/*!*****************************************************!*\
  !*** ./src/app/attendance/attendance.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-cell {\n\tcolor: #3F51B5;\n\tfont-family: courier; \n\tfont-size: 100%;\n}\nmat-icon {\n\tcolor: #3F51B5;\n}"

/***/ }),

/***/ "./src/app/attendance/attendance.component.html":
/*!******************************************************!*\
  !*** ./src/app/attendance/attendance.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-sidenav-container>\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n\t<mat-form-field >\n\t<mat-icon matPrefix class=\"icon\">book</mat-icon>\n\t<mat-select placeholder=\"Class\" (ngModelChange)=\"getClassName($event)\" name=\"class\">\n\t<mat-option *ngFor=\"let class of classData;\" [value]=\"class.id\">{{class.name}}</mat-option>\n\t</mat-select>\n\t</mat-form-field>\n  </div>\n</div>\n\n <form name=\"attendanceData\" class=\"student-form\">\n  <table style=\"width:100%\" >\n   <thead> <tr>\n      <td>Roll Number</td>\n      <td>First Name</td>\n      <td>Last Name</td>\n      <td>Present</td>\n      <td>Absent</td>\n      <td>Leave</td>\n       <td>Late</td>\n    </tr>\n  </thead>\n    <tr *ngFor=\"let student of studentData;let i = index;\">\n    <td><mat-form-field>\n    <input  matInput name=\"roll_number{{i}}\" [(ngModel)]=\"student.roll_number\" #roll_number{{i}}=\"ngModel\">\n    </mat-form-field></td>\n    <td><mat-form-field>\n            <input  matInput name=\"first_name{{i}}\" [(ngModel)]=\"student.first_name\" #first_name{{i}}=\"ngModel\">\n    </mat-form-field></td>\n    <td><mat-form-field>\n            <input  matInput name=\"last_name{{i}}\" [(ngModel)]=\"student.last_name\" #last_name{{i}}=\"ngModel\">\n    </mat-form-field></td>\n    <td>\n    <mat-radio-button  name=\"action{{i}}\" [(ngModel)]=\"student.action\"  #action{{i}}=\"ngModel\" (click)='onRadioClick(i,\"P\",student)' ></mat-radio-button> \n    </td>\n    <td>\n          <mat-radio-button  name=\"action{{i}}\" [(ngModel)]=\"student.action\" #action{{i}}=\"ngModel\" (click)='onRadioClick(i,\"A\",student)'></mat-radio-button> \n    </td>\n    <td>\n          <mat-radio-button  name=\"action{{i}}\" [(ngModel)]=\"student.action\" #action{{i}}=\"ngModel\" (click)='onRadioClick(i,\"L\",student)'></mat-radio-button> \n    </td>\n    <td>\n          <mat-radio-button  name=\"action{{i}}\" [(ngModel)]=\"student.action\" #action{{i}}=\"ngModel\" (click)='onRadioClick(i,\"LT\",student)'></mat-radio-button> \n    </td>\n    </tr>\n  </table>\n<!-- <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"left\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n<div class=\"button-row\">\n     <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n      <button mat-raised-button color=\"primary\">Reset</button>\n  </div></div> -->\n</form>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/attendance/attendance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/attendance/attendance.component.ts ***!
  \****************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class */ "./src/app/class.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(rest, router, datePipe) {
        this.rest = rest;
        this.router = router;
        this.datePipe = datePipe;
        this.classData = _class__WEBPACK_IMPORTED_MODULE_1__["CLASSES"];
        this.studentData = [];
        console.log("class:", this.classData);
    }
    ;
    AttendanceComponent.prototype.getClassName = function (id) {
        var _this = this;
        this.classId = id;
        var classObj = { "fn": "selectAllById", "params": ["students", ['class'], [id]] };
        this.rest.getStudentsById(classObj).subscribe(function (response) {
            _this.studentData = response;
            for (var i = 0; i < ((_this.studentData).length); i++) {
                _this.studentData[i].action = 'present';
            }
        });
    };
    AttendanceComponent.prototype.getDate = function (date) {
        console.log("date:", date);
    };
    /*submitAttendance(form:NgForm){
            console.log("att form: ",form);
            let keys = Object.keys(form.controls);
            let values = Object.values(form.value);
            console.log("keys: ",keys);
            console.log("values: ",values);
            keys.push('date');
            values.push(new Date());
            keys.push('class');
            values.push(this.classId);
            console.log("keys: ",keys);
            console.log("values: ",values);
            var key = keys.keys()[0]; console.log("key:",key);
            this.attendanceObj = {"fn": "insert","params": ["attendance",keys,values]};
            console.log("attendanceObj: ",this.attendanceObj);
                this.rest.postAttendance(this.attendanceObj).subscribe((response) => {
                alert("attendance added.")
               this.router.navigate(['/liststudent']);
          });
    }*/
    AttendanceComponent.prototype.onRadioClick = function (index, val, student) {
        this.studentData[index].action = val;
        console.log("student:", student);
        var date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        var keys = ['date', 'class', 'roll_number', 'action'];
        var values = [date, student.class, student.roll_number, student.action];
        this.delAttendanceObj = { "fn": "deleteRowAttendance", "params": ["attendance", [student.roll_number], [date], [student.class]] };
        this.rest.deleteRowAttendance(this.delAttendanceObj).subscribe(function (response) {
        });
        this.attendanceObj = { "fn": "insert", "params": ["attendance", keys, values] };
        this.rest.postAttendance(this.attendanceObj).subscribe(function (response) {
            /*alert("attendance added.")
            this.router.navigate(['/liststudent']);*/
        });
    };
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/attendance/attendanceView.component.ts":
/*!********************************************************!*\
  !*** ./src/app/attendance/attendanceView.component.ts ***!
  \********************************************************/
/*! exports provided: AttendanceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceViewComponent", function() { return AttendanceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class */ "./src/app/class.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendanceViewComponent = /** @class */ (function () {
    function AttendanceViewComponent(rest, datePipe) {
        this.rest = rest;
        this.datePipe = datePipe;
        this.classData = _class__WEBPACK_IMPORTED_MODULE_2__["CLASSES"];
        this.displayedColumns = ['roll_number', 'first_name', 'last_name', 'action'];
        this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.presentAction = 0;
        this.absentAction = 0;
        this.leaveAction = 0;
    }
    ;
    AttendanceViewComponent.prototype.getClassName = function (id) {
        var _this = this;
        this.classId = id;
        console.log("getClassName:" + this.todayDate);
        this.dataSource = '';
        var classObj = { "fn": "selectAttendance", "params": ["attendance", "students", [this.classId], [this.todayDate]] };
        console.log(classObj);
        this.rest.getAttendanceByClass(classObj).subscribe(function (response) {
            _this.dataSource = response;
            for (var i = 0; i <= [response].length; i++) {
                if (response[i].action == 'A') {
                    _this.absentAction += parseInt("01");
                }
                else if (response[i].action == 'L') {
                    _this.leaveAction += parseInt("01");
                }
                else {
                    _this.presentAction += parseInt("01");
                }
            }
        });
    };
    AttendanceViewComponent.prototype.getSearchDate = function (searchDate) {
        //console.log(this.datePipe.transform(searchDate, 'yyyy-MM-dd'));
        this.todayDate = this.datePipe.transform(searchDate, 'yyyy-MM-dd');
        console.log("getSearchDate:" + this.todayDate);
        this.getClassName(this.classId);
    };
    AttendanceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance-view',
            template: __webpack_require__(/*! ./viewAttendance.component.html */ "./src/app/attendance/viewAttendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], AttendanceViewComponent);
    return AttendanceViewComponent;
}());



/***/ }),

/***/ "./src/app/attendance/viewAttendance.component.html":
/*!**********************************************************!*\
  !*** ./src/app/attendance/viewAttendance.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-sidenav-container>\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n\t<mat-form-field >\n\t<mat-icon matPrefix class=\"icon\">book</mat-icon>\n\t<mat-select placeholder=\"Class\" ngModel (ngModelChange)=\"getClassName($event)\" name=\"className\" #className=\"ngModel\">\n\t<mat-option *ngFor=\"let class of classData;\" [value]=\"class.id\">{{class.name}}</mat-option>\n\t</mat-select>\n\t</mat-form-field>\n  </div>\n  <div class=\"item item-1\" fxFlex=\"15%\">\n\t<mat-form-field >\n\t <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"searchDate\" ngModel #searchDate=\"ngModel\" (ngModelChange)=\"getSearchDate($event)\" >\n  <mat-datepicker-toggle matPrefix [for]=\"picker\">\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n \n\t</mat-form-field>\n  </div>\n\n  <div class=\"item item-1\" fxFlex=\"15%\">\n  <mat-form-field >\n    <input matInput type=\"text\" name=\"present\" style=\"color:green;font-weight:bold;\" value=\"Present- {{presentAction}}\">\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-1\" fxFlex=\"15%\">\n  <mat-form-field >\n    <input matInput type=\"text\" name=\"absent\" style=\"color:red;font-weight:bold;\" value=\"Leave- {{leaveAction}}\">\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-1\" fxFlex=\"15%\">\n  <mat-form-field >\n    <input matInput type=\"text\" name=\"leave\" style=\"color:blue;font-weight:bold;\" value=\"Absent- {{absentAction}}\">\n  </mat-form-field>\n  </div>\n\n</div></mat-sidenav-container>\n<mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"roll_number\">\n            <mat-header-cell *matHeaderCellDef>Roll Number</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">{{element.roll_number }} \n            </mat-cell>\n        </ng-container>\n\n  <ng-container matColumnDef=\"first_name\">\n            <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">{{element.first_name | titlecase }} \n            </mat-cell>\n        </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"last_name\">\n    <mat-header-cell *matHeaderCellDef> Last Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.last_name | titlecase }} </mat-cell>\n  </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\n             <mat-cell *matCellDef=\"let element\" style=\"font-weight: bold;\" [ngStyle]=\"{'color': element.action == 'A' ? 'red' : element.action == 'L' ? 'blue' : 'green'}\"> {{element.action }} </mat-cell>\n        </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/books/book.component.css":
/*!******************************************!*\
  !*** ./src/app/books/book.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-cell {\n\tcolor: #3F51B5;\n\tfont-family: courier; \n\tfont-size: 100%;\n}\nmat-icon {\n\tcolor: #3F51B5;\n}"

/***/ }),

/***/ "./src/app/books/book.component.html":
/*!*******************************************!*\
  !*** ./src/app/books/book.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-sidenav-container>\n<form name=\"bookData\" (submit)=\"submitBook(postForm); postForm.reset()\" #postForm=\"ngForm\" class=\"student-form\">\n<div class=\"container\"\n   fxLayout\n   fxLayout.xs=\"column\"\n   fxLayoutGap=\"10px\"\n   fxLayoutGap.xs=\"0\">\n   <div class=\"item item-1\" fxFlex=\"15%\">\n      <mat-form-field class=\"navigation-items\">\n         <mat-label>Book Title</mat-label>\n         <mat-icon matPrefix class=\"icon\">book</mat-icon>\n         <input matInput value=\"\" name=\"book_title\" ngModel required minlength=\"4\" #book_title=\"ngModel\">\n         <mat-error *ngIf=\"book_title.invalid\">Please enter Book Title.</mat-error>\n      </mat-form-field>\n   </div>\n   <div class=\"item item-2\" fxFlex=\"15%\">\n      <mat-form-field >\n         <mat-label>Author Name</mat-label>\n         <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n         <input matInput placeholder=\"Author Name\" name=\"author_name\" ngModel required minlength=\"5\" #author_name=\"ngModel\">\n         <mat-error *ngIf=\"author_name.invalid\">Please enter Author name.</mat-error>\n      </mat-form-field>\n   </div>\n\n   <div class=\"item item-2\" fxFlex=\"15%\">\n      <mat-form-field >\n         <mat-icon matPrefix class=\"icon\">print</mat-icon>\n         <input matInput placeholder=\"Publication\" name=\"publication\" ngModel required minlength=\"4\" #publication=\"ngModel\">\n         <mat-error *ngIf=\"publication.invalid\">Please enter publication.</mat-error>\n      </mat-form-field>\n   </div>\n</div>\n<div class=\"container\"\n   fxLayout\n   fxLayout.xs=\"column\"\n   fxLayoutGap=\"10px\"\n   fxLayoutGap.xs=\"0\">\n   <div class=\"item item-1\" fxFlex=\"15%\">\n      <mat-form-field class=\"navigation-items\">\n         <mat-label>Course Book</mat-label>\n         <mat-icon matPrefix class=\"icon\">pan_tool</mat-icon>\n         <mat-select placeholder=\"Course Book\"  name=\"course_book\" ngModel required #course_book=\"ngModel\">\n            <mat-option value=\"yes\">Yes</mat-option>\n            <mat-option value=\"no\">No</mat-option>\n         </mat-select>\n         <mat-error *ngIf=\"course_book.invalid\">Please select option.</mat-error>\n      </mat-form-field>\n   </div>\n</div>\n\n<div class=\"container\"\n   fxLayout\n   fxLayout.xs=\"column\"\n   fxLayoutAlign=\"left\"\n   fxLayoutGap=\"10px\"\n   fxLayoutGap.xs=\"0\">\n   <div class=\"button-row\">\n      <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n      <button mat-raised-button color=\"primary\" type=\"reset\">Reset</button>\n   </div>\n</div>\n</form>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/books/book.component.ts":
/*!*****************************************!*\
  !*** ./src/app/books/book.component.ts ***!
  \*****************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = /** @class */ (function () {
    function BooksComponent(rest) {
        this.rest = rest;
        this.bookData = {};
        /*this.rest.getClasses().subscribe((response) => {
        console.log("res KV class: ",response);
        this.classData = response;
        });*/
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent.prototype.submitBook = function (form) {
        if (form.invalid) {
            return;
        }
        var keys = Object.keys(form.form.controls);
        var values = Object.values(form.value);
        console.log("key & values", keys, values);
        var bookObj = { "fn": "insert", "params": ["books", keys, values] };
        this.rest.postBook(bookObj).subscribe(function (response) {
            alert("Book Added.");
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/books/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/books/book.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/books/viewBook.component.html":
/*!***********************************************!*\
  !*** ./src/app/books/viewBook.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef>Book ID</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">{{element.id }}\n            </mat-cell>\n        </ng-container>\n\n  <ng-container matColumnDef=\"book_title\">\n            <mat-header-cell *matHeaderCellDef>Book Title</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">{{element.book_title | titlecase }}\n            </mat-cell>\n        </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"author_name\">\n    <mat-header-cell *matHeaderCellDef> Author Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.author_name | titlecase }} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"publication\">\n    <mat-header-cell  *matHeaderCellDef> Publication </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.publication | titlecase }} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"course_book\">\n    <mat-header-cell *matHeaderCellDef> Course Book </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.course_book}} </mat-cell>\n  </ng-container>\n\n<ng-container matColumnDef=\"action\">\n    <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n    <mat-cell [routerLink]=\"['/bookAdd']\" *matCellDef=\"let element\"><mat-icon  matTooltip=\"Edit Book\" matPrefix class=\"icon\">edit</mat-icon> <mat-icon  matTooltip=\"Delete Book\" matPrefix class=\"icon\">delete</mat-icon>  \n            </mat-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/books/viewBook.component.ts":
/*!*********************************************!*\
  !*** ./src/app/books/viewBook.component.ts ***!
  \*********************************************/
/*! exports provided: ListBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBookComponent", function() { return ListBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListBookComponent = /** @class */ (function () {
    function ListBookComponent(rest) {
        var _this = this;
        this.rest = rest;
        this.displayedColumns = ['id', 'book_title', 'author_name', 'publication', 'course_book', 'action'];
        var books = {
            "fn": "selectAll",
            "params": ["books"]
        };
        this.rest.getBooks().subscribe(function (response) {
            _this.dataSource = response;
            _this.bookList = response;
        });
    }
    ListBookComponent.prototype.ngOnInit = function () {
    };
    ListBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-book',
            template: __webpack_require__(/*! ./viewBook.component.html */ "./src/app/books/viewBook.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/books/book.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], ListBookComponent);
    return ListBookComponent;
}());



/***/ }),

/***/ "./src/app/class.ts":
/*!**************************!*\
  !*** ./src/app/class.ts ***!
  \**************************/
/*! exports provided: ClassList, CLASSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassList", function() { return ClassList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSES", function() { return CLASSES; });
var ClassList = /** @class */ (function () {
    function ClassList() {
    }
    return ClassList;
}());

var CLASSES = [
    { id: 'Nursery', name: 'Nursery' },
    { id: 'LKG', name: 'LKG' },
    { id: 'UKG', name: 'UKG' },
    { id: 'First', name: 'First' },
    { id: 'Second', name: 'Second' },
    { id: 'Third', name: 'Third' },
    { id: 'Fourth', name: 'Fourth' },
    { id: 'Fifth', name: 'Fifth' },
    { id: 'Sixth', name: 'Sixth' },
    { id: 'Seventh', name: 'Seventh' },
    { id: 'Eighth', name: 'Eighth' },
    { id: 'Nineth', name: 'Nineth' },
    { id: 'Tenth', name: 'Tenth' },
    { id: 'Eleventh', name: 'Eleventh' },
    { id: 'Twelveth', name: 'Twelveth' },
];


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* mat-grid-tile {\n  background: lightblue;\n} */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-sidenav-container>\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n     <div fxFlex=\"20%\">\n  \t<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Student</mat-card-title>\n    <mat-card-subtitle>Class-1 <button mat-button>View</button></mat-card-subtitle>\n     <mat-card-subtitle>Class-2 <button mat-button>View</button></mat-card-subtitle>\n      <mat-card-subtitle>Class-3 <button mat-button>View</button></mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n </div>\n <div fxFlex=\"20%\">\n  \t<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Student</mat-card-title>\n    <mat-card-subtitle>Class-1 <button mat-button>View</button></mat-card-subtitle>\n     <mat-card-subtitle>Class-2 <button mat-button>View</button></mat-card-subtitle>\n      <mat-card-subtitle>Class-3 <button mat-button>View</button></mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n </div>\n <div fxFlex=\"20%\">\n  \t<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Student</mat-card-title>\n    <mat-card-subtitle>Class-1 <button mat-button>View</button></mat-card-subtitle>\n     <mat-card-subtitle>Class-2 <button mat-button>View</button></mat-card-subtitle>\n      <mat-card-subtitle>Class-3 <button mat-button>View</button></mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n</div>\n\n     <div fxFlex=\"20%\">\n \n  \t<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Student</mat-card-title>\n    <mat-card-subtitle>Class-1 <button mat-button>View</button></mat-card-subtitle>\n     <mat-card-subtitle>Class-2 <button mat-button>View</button></mat-card-subtitle>\n      <mat-card-subtitle>Class-3 <button mat-button>View</button></mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n  </div></div>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-student/edit-student.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-student/edit-student.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-student/edit-student.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-student/edit-student.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-home></app-home>\n <mat-sidenav-container>\n   <p>\n  Edit Student\n</p>\n <form name=\"studentData\" (submit)=\"submitEditStudent(postForm.form);\" #postForm=\"ngForm\" class=\"student-form\" *ngFor = \"let student of studentData\">\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\" >\n  <div class=\"item item-1\" fxFlex=\"15%\">\n     <mat-form-field class=\"navigation-items\">\n     <mat-label>Student Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput type=\"text\" name=\"first_name\" [(ngModel)]=\"student.first_name\" required minlength=\"4\" #first_name=\"ngModel\">\n    <mat-error *ngIf=\"first_name.invalid\">Please enter first name.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Last Name\" name=\"last_name\" [(ngModel)]=\"student.last_name\" required minlength=\"5\" #last_name=\"ngModel\">\n    <mat-error *ngIf=\"last_name.invalid\">Please enter last name.</mat-error>\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Name\" name=\"father_name\" [(ngModel)]=\"student.father_name\" required minlength=\"4\" #father_name=\"ngModel\">\n    <mat-error *ngIf=\"father_name.invalid\">Please enter father name.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Name\" name=\"mother_name\" [(ngModel)]=\"student.mother_name\" required minlength=\"5\" #mother_name=\"ngModel\">\n    <mat-error *ngIf=\"mother_name.invalid\">Please enter mother name.</mat-error>\n  </mat-form-field>\n  </div>\n\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n     <mat-form-field class=\"navigation-items\">\n     <mat-label>Gender</mat-label>       \n    <mat-icon matPrefix class=\"icon\">sex</mat-icon>\n    <mat-select placeholder=\"gender\"  name=\"gender\" [(ngModel)]=\"student.gender\" required #gender=\"ngModel\">\n      <mat-option value=\"male\">Male</mat-option>\n      <mat-option value=\"female\">Female</mat-option>\n    </mat-select>\n<mat-error *ngIf=\"gender.invalid\">Please select gender.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Address</mat-label>  \n    <mat-icon matPrefix class=\"icon\">place</mat-icon>\n        <textarea matInput name=\"address\" [(ngModel)]=\"student.address\" required minlength=\"10\" #address=\"ngModel\"></textarea>\n        <mat-error *ngIf=\"address.invalid\">Please enter address.</mat-error>\n\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Phone</mat-label> \n    <mat-icon matPrefix class=\"icon\">call</mat-icon>\n    <input matInput placeholder=\"Contact\" name=\"contact_number\" [(ngModel)]=\"student.contact_number\" required minlength=\"9\" maxlength=\"11\" #contact_name=\"ngModel\">\n     <mat-error *ngIf=\"contact_name.invalid\">Please enter contact.</mat-error>\n  </mat-form-field>\n  </div>\n\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n     <mat-form-field class=\"navigation-items\">\n     <mat-label>Email</mat-label>       \n    <mat-icon matPrefix class=\"icon\">email</mat-icon>\n    <input matInput value=\"\" [(ngModel)]=\"student.email\" name=\"email\"  required #email=\"ngModel\">\n    <mat-error *ngIf=\"email.invalid\">Please enter valid email address.</mat-error>\n   \n  </mat-form-field>\n  </div>\n\n<div class=\"item item-2\" fxFlex=\"15%\">\n  <mat-form-field >\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"dob\" [(ngModel)]=\"student.dob\" required #dob=\"ngModel\" >\n<mat-datepicker-toggle matPrefix [for]=\"picker\">\n  \n</mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n<mat-error *ngIf=\"dob.invalid\">Please enter dob.</mat-error>\n</mat-form-field>\n</div>\n\n</div>\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"left\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"button-row\">\n     <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n      <button type=\"button\" (click)=\"goto()\" mat-raised-button color=\"primary\">Cancel</button>\n\n  </div>\n  \n\n</div>\n\n</form>\n</mat-sidenav-container> -->\n\n<app-home></app-home>\n <mat-sidenav-container>\n <form  name=\"editStudentData\" (submit)=\"submitEditStudent(postForm.form)\" #postForm=\"ngForm\"  class=\"student-form\" *ngFor = \"let student of studentData\">\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n     <mat-form-field class=\"navigation-items\">\n     <mat-label>Student Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"first_name\" [(ngModel)]=\"student.first_name\" #first_name=\"ngModel\" required>\n     <mat-error *ngIf=\"first_name.invalid\">Please enter first name.</mat-error> \n  </mat-form-field>\n  </div>\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Last Name\" name=\"last_name\" [(ngModel)]=\"student.last_name\" #last_name=\"ngModel\" required>\n     <mat-error *ngIf=\"last_name.invalid\">Please enter last name.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Adhaar No\" name=\"adhaar_no\" [(ngModel)]=\"student.adhaar_no\" #adhaar_no=\"ngModel\" required>\n     <mat-error *ngIf=\"adhaar_no.invalid\">Please enter last name.</mat-error> \n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Category\"  name=\"category\" [(ngModel)]=\"student.category\" #category=\"ngModel\">\n      <mat-option value=\"OBC\">OBC</mat-option>\n      <mat-option value=\"Gen\">Gen</mat-option>\n      <mat-option value=\"SC\">SC</mat-option>\n      <mat-option value=\"ST\">ST</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Religion\"  name=\"religion\" [(ngModel)]=\"student.religion\" #religion=\"ngModel\">\n      <mat-option value=\"HINDU\">HINDU</mat-option>\n      <mat-option value=\"MUSLIM\">MUSLIM</mat-option>\n      <mat-option value=\"SIKH\">SIKH</mat-option>\n      <mat-option value=\"CHRISTIAN\">CHRISTIAN</mat-option>\n      <mat-option value=\"BODH\">BODH</mat-option>\n      <mat-option value=\"JAIN\">JAIN</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Handicapped\"  name=\"handicapped\" [(ngModel)]=\"student.handicapped\" #handicapped=\"ngModel\">\n      <mat-option value=\"YES\">Yes</mat-option>\n      <mat-option value=\"NO\">No</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Name\" name=\"father_name\" [(ngModel)]=\"student.father_name\" #father_name=\"ngModel\" required>\n     <mat-error *ngIf=\"father_name.invalid\">Please enter father name.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Qualification\" name=\"father_qualification\" [(ngModel)]=\"student.father_qualification\" #father_qualification=\"ngModel\" required>\n     <mat-error *ngIf=\"father_qualification.invalid\">Please enter father Qualification.</mat-error> \n     \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Occupation\" name=\"father_occupation\" [(ngModel)]=\"student.father_occupation\" #father_occupation=\"ngModel\" required>\n     <mat-error *ngIf=\"father_occupation.invalid\">Please enter father Occupation.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Name\" name=\"mother_name\" [(ngModel)]=\"student.mother_name\" #mother_name=\"ngModel\" required>\n    <mat-error *ngIf=\"mother_name.invalid\">Please enter mother name.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Qualification\" name=\"mother_qualification\" [(ngModel)]=\"student.mother_qualification\" #mother_qualification=\"ngModel\">\n     \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Occupation\" name=\"mother_occupation\" [(ngModel)]=\"student.mother_occupation\" #mother_occupation=\"ngModel\">\n  </mat-form-field>\n  </div>\n  \n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n     <mat-form-field class=\"navigation-items\">\n     <mat-label>Gender</mat-label>       \n    <mat-icon matPrefix class=\"icon\">sex</mat-icon>\n    <mat-select placeholder=\"gender\"  name=\"gender\" [(ngModel)]=\"student.gender\" #gender=\"ngModel\" required>\n      <mat-option value=\"male\">Male</mat-option>\n      <mat-option value=\"female\">Female</mat-option>\n    </mat-select>\n<mat-error *ngIf=\"gender.invalid\">Please select gender.</mat-error> \n  </mat-form-field>\n  </div>\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Address</mat-label>  \n    <mat-icon matPrefix class=\"icon\">place</mat-icon>\n        <textarea matInput name=\"address\" [(ngModel)]=\"student.address\" #address=\"ngModel\" required></textarea>\n         <mat-error *ngIf=\"address.invalid\">Please enter address.</mat-error>\n\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Phone1</mat-label> \n    <mat-icon matPrefix class=\"icon\">call</mat-icon>\n    <input matInput placeholder=\"Contact\" name=\"contact_number\" [(ngModel)]=\"student.contact_number\" #contact_number=\"ngModel\" required>\n      <mat-error *ngIf=\"contact_number.invalid\">Please enter contact.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Phone2</mat-label> \n    <mat-icon matPrefix class=\"icon\">call</mat-icon>\n    <input matInput placeholder=\"Contact\" name=\"contact_number2\" [(ngModel)]=\"student.contact_number2\" #contact_number2=\"ngModel\">\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Annual Income</mat-label> \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput placeholder=\"Income\" name=\"annual_income\" [(ngModel)]=\"student.annual_income\" #annual_income=\"ngModel\" required>\n    <mat-error *ngIf=\"annual_income.invalid\">Please enter annual income.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"miniority\"  name=\"miniority\" [(ngModel)]=\"student.miniority\" #miniority=\"ngModel\">\n      <mat-option value=\"YES\">Yes</mat-option>\n      <mat-option value=\"NO\">No</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n     <mat-form-field class=\"navigation-items\">\n     <mat-label>Email</mat-label>       \n    <mat-icon matPrefix class=\"icon\">email</mat-icon>\n    <input matInput value=\"\" name=\"email\" [(ngModel)]=\"student.email\" #email=\"ngModel\" required>\n     <mat-error *ngIf=\"email.invalid\">Please enter valid email address.</mat-error> \n   \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Only Child\"  name=\"only_child\" [(ngModel)]=\"student.only_child\" #only_child=\"ngModel\">\n      <mat-option value=\"YES\">Yes</mat-option>\n      <mat-option value=\"NO\">No</mat-option>\n    </mat-select>\n\n     <mat-error *ngIf=\"only_child.invalid\">Please enter only_child.</mat-error> \n  </mat-form-field>\n</div>\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"DOB\" name=\"dob\" [(ngModel)]=\"student.dob\" #dob=\"ngModel\" required>\n  <mat-datepicker-toggle matPrefix [for]=\"picker\">\n    \n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n   <mat-error *ngIf=\"dob.invalid\">Please enter dob.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">book</mat-icon>\n    <mat-select placeholder=\"Class\"  name=\"class\" [(ngModel)]=\"student.class\" #class=\"ngModel\" required>\n      <mat-option *ngFor=\"let class of classData;\" value=\"{{class.id}}\">{{class.name}}</mat-option>\n    </mat-select>\n     <mat-error *ngIf=\"class.invalid\">Please select class.</mat-error> \n  </mat-form-field>\n  </div>\n<div class=\"item item-1\" fxFlex=\"15%\">\n    <button mat-stroked-button  type=\"button\" color=\"primary\" (click)=\"filePicker.click()\">Pick Image</button>\n    <input type=\"file\"  style=\"display: none;\" #filePicker (change)=\"onImagePicked($event)\">\n  </div>\n  <div class=\"image-preview\" *ngIf=\"imagePreview !='' && imagePreview\">\n    <img [src]=\"imagePreview\" [alt]=\"form.value.first_name\">\n  </div>\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"left\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"button-row\">\n     <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n      <button mat-raised-button color=\"primary\">Reset</button>\n\n  </div>\n  \n\n</div>\n\n</form>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/edit-student/edit-student.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-student/edit-student.component.ts ***!
  \********************************************************/
/*! exports provided: EditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function() { return EditStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class */ "./src/app/class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditStudentComponent = /** @class */ (function () {
    function EditStudentComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.studentData = {};
        this.classData = _class__WEBPACK_IMPORTED_MODULE_3__["CLASSES"];
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log("std id: " + [params['id']]);
            _this.editStudentId = params['id'];
            _this.rest.getStudentsById(params['id']).then(function (response) {
                console.log("res KV: ", response);
                _this.studentData = response;
                console.log("studentData edit :", _this.studentData);
            });
        });
    };
    EditStudentComponent.prototype.submitEditStudent = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        console.log("edit form :", form);
        var keys = Object.keys(form.controls);
        //form.value.dob = (form.value.dob).toString();
        var values = Object.values(form.value);
        //let classValue = Object.values(form.value.class) ;
        this.rest.update('students', this.editStudentId, form.value).then(function (response) {
            alert("Student Edited !!");
            _this.router.navigate(['/liststudent']);
        });
    };
    EditStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-student',
            template: __webpack_require__(/*! ./edit-student.component.html */ "./src/app/edit-student/edit-student.component.html"),
            styles: [__webpack_require__(/*! ./edit-student.component.css */ "./src/app/edit-student/edit-student.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditStudentComponent);
    return EditStudentComponent;
}());



/***/ }),

/***/ "./src/app/firebasewrapper.js":
/*!************************************!*\
  !*** ./src/app/firebasewrapper.js ***!
  \************************************/
/*! exports provided: FirebaseWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseWrapper", function() { return FirebaseWrapper; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

class FirebaseWrapper {

  constructor(){
    let config = {
    apiKey: "AIzaSyD9B2YdN4gAPqryKSiHRQocPc9kA_ZSFLY",
    authDomain: "jhoraapp.firebaseapp.com",
    databaseURL: "https://jhoraapp.firebaseio.com",
    projectId: "jhoraapp",
    storageBucket: "jhoraapp.appspot.com",
    messagingSenderId: "105398319929"
  };
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
    this.fireStore = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
  }

  uuidv4() {
    let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return Math.floor(new Date() / 1000)+"-"+ x;
  }

  login(body){
    return firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(body.username, body.password).then(function() {
      return  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser;
    });
  }

  logout(){

  }

  addStudent(student){
    return this.fireStore.collection('students').where('class', '==', student.class).get().then((students)=>{
       return students.size || students.length;
    })
    .then((data)=>{
      data ? (student.roll_number = data +1) : (student.roll_number = 1);
      let uId = this.uuidv4();
      student.uId = uId;
      return this.fireStore.collection('students').doc(uId).set(student)
    })
  }

  addReceipt(receipt){
    let uId = this.uuidv4();
      receipt.uId = uId;
      console.log("firebase: ",receipt);
      return this.fireStore.collection('receipt').doc(uId).set(receipt)

  }

  selectAll(tableName){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  insert(tableName ='', docName, data){
    let p = new Promise( (resolve, reject)=>{
      resolve(this.fireStore.collection(tableName).doc(docName).set(data));
    });
    return p;
  }

  update(tableName, docName, data){
    let p = new Promise( (resolve, reject)=>{
      resolve(this.fireStore.collection(tableName).doc(docName).update(data));
    });
    return p;
  }

  selectAllById(tableName,id){
    let p = new Promise( (resolve, reject)=>{
      this.fireStore.collection(tableName).where('uId', '==', id).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        resolve(rows)
      })
    });
    return p;
  }

  deleteData(tableName, docName){
    let p = new Promise( (resolve, reject)=>{
      resolve(this.fireStore.collection(tableName).doc(docName).delete());
    });
    return p;
  }

}


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n <mat-sidenav-content>\n   <mat-toolbar color=\"primary\">\n    <div fxHide.gt-xs>\n      <button mat-icon-button>\n       <mat-icon>menu</mat-icon>\n     </button>\n   </div>\n   <div>\n    <a>\n     Daksh International Daniyari\n   </a>\n </div>\n <div fxFlex fxLayout fxLayoutAlign=\"flex-end\"  fxHide.xs>\n   <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n     <!-- <li>\n       <a mat-list-item\n       [routerLink]=\"['/login']\">\n       <mat-icon>input</mat-icon>&nbsp;\n       <span  class=\"label\">Login</span>\n     </a>\n        </li> -->\n\n   <li [matMenuTriggerFor]=\"student\"  #matMenuTrigger1=\"matMenuTrigger\">\n     <a mat-list-item (mouseenter)=\"matMenuTrigger1.openMenu()\">\n       <mat-icon class=\"icon\">people</mat-icon>&nbsp;\n       <span class=\"label\">Student</span>\n     </a>\n     <mat-menu #student=\"matMenu\" (mouseleave)=\"matMenuTrigger1.closeMenu()\" [overlapTrigger]=\"false\">\n       <button mat-menu-item [routerLink]=\"['/student']\">Add Student</button>\n       <button mat-menu-item [routerLink]=\"['/liststudent']\">View Student</button>\n       <button mat-menu-item [routerLink]=\"['/attendance']\">Attendance</button>\n       <button mat-menu-item [routerLink]=\"['/attendanceView']\">View Attendance</button>\n     </mat-menu>\n   </li>\n   <li [matMenuTriggerFor]=\"books\"  #matMenuTrigger3=\"matMenuTrigger\">\n     <a mat-list-item (mouseenter)=\"matMenuTrigger3.openMenu()\">\n       <mat-icon class=\"icon\">book</mat-icon>&nbsp;\n       <span class=\"label\">Books</span>\n     </a>\n     <mat-menu #books=\"matMenu\" (mouseleave)=\"matMenuTrigger1.closeMenu()\" [overlapTrigger]=\"false\">\n       <button mat-menu-item [routerLink]=\"['/bookAdd']\">Add Books</button>\n       <button mat-menu-item [routerLink]=\"['/bookView']\">View Books</button>\n       <button mat-menu-item [routerLink]=\"['/issueBook']\">Add Library</button>\n       <button mat-menu-item [routerLink]=\"['/issuedBooksView']\">View Library</button>\n     </mat-menu>\n   </li>\n\n   <li [matMenuTriggerFor]=\"receipt\" #matMenuTrigger2=\"matMenuTrigger\">\n     <a mat-list-item (mouseenter)=\"matMenuTrigger2.openMenu()\">\n       <mat-icon class=\"icon\">receipt</mat-icon>&nbsp;\n       <span class=\"label\">Receipt</span>\n     </a>\n     <mat-menu #receipt=\"matMenu\" (mouseleave)=\"matMenuTrigger2.closeMenu()\" [overlapTrigger]=\"false\">\n       <button mat-menu-item [routerLink]=\"['/receipt']\">Add Receipt</button>\n       <button mat-menu-item [routerLink]=\"['/receiptList']\">View Receipt</button>\n     </mat-menu>\n   </li>\n\n <li>\n   <a mat-list-item\n   [routerLink]=\"['/dashboard']\">\n   <mat-icon class=\"icon\">dashboard</mat-icon>&nbsp;\n   <span class=\"label\">Dashboard</span>\n </a>\n</li>\n<li>\n <a mat-list-item\n   [routerLink]=\"['/login']\">\n   <mat-icon class=\"icon\">input</mat-icon>&nbsp;\n   <span class=\"label\">LogOut</span>\n </a>\n</li>\n</ul>\n</div>\n</mat-toolbar>\n<main>\n</main>\n</mat-sidenav-content>\n</mat-sidenav-container>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<p>\n  library works!\n</p>\n"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/list-student/delete_dialog.html":
/*!*************************************************!*\
  !*** ./src/app/list-student/delete_dialog.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Student</h2>\n<mat-dialog-content>Are you sure?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button [mat-dialog-close]=\"true\" (click)=\"deleteStudent(data.studentId)\" >Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/list-student/list-student.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-student/list-student.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-cell {\n\tcolor: #3F51B5;\n\tfont-family: courier; \n\tfont-size: 100%;\n}\nmat-icon {\n\tcolor: #3F51B5;\n}"

/***/ }),

/***/ "./src/app/list-student/list-student.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-student/list-student.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n<mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"roll_number\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Roll Number</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">{{element.roll_number }} \n            </mat-cell>\n        </ng-container>\n\n  <ng-container matColumnDef=\"first_name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n            <mat-cell  *matCellDef=\"let element \"><a href=\"\" [routerLink]=\"['/studentDetail',element.uId]\">{{element.first_name | titlecase }} </a>\n            </mat-cell>\n        </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"father_name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Father Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.father_name | titlecase }} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"mother_name\">\n    <mat-header-cell  *matHeaderCellDef mat-sort-header> Mother Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.mother_name | titlecase }} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"class\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Class </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.class}} </mat-cell>\n  </ng-container>\n\n<ng-container matColumnDef=\"dob\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>DOB</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{element.dob | date}}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"uId\">\n            <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\n            <mat-cell [routerLink]=\"['/student',element.uId]\" *matCellDef=\"let element\"><mat-icon  matTooltip=\"Edit Student\" matPrefix class=\"icon\">edit</mat-icon> <mat-icon (click)=\"openDialog(element)\" matTooltip=\"Delete Student\" matPrefix class=\"icon\">delete</mat-icon>\n            </mat-cell>\n        </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/list-student/list-student.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-student/list-student.component.ts ***!
  \********************************************************/
/*! exports provided: ListStudentComponent, DialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStudentComponent", function() { return ListStudentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ListStudentComponent = /** @class */ (function () {
    function ListStudentComponent(rest, dialog) {
        this.rest = rest;
        this.dialog = dialog;
        this.displayedColumns = ['roll_number', 'first_name', 'father_name', 'mother_name', 'class', 'dob', 'uId'];
    }
    ListStudentComponent.prototype.openDialog = function (studentData) {
        console.log("studentData console: ", studentData);
        var dialogRef = this.dialog.open(DialogContent, {
            data: {
                studentId: studentData.uId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            console.log("Dialog result: ", result);
        });
    };
    ListStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getStudents().then(function (response) {
            console.log("res KV: ", response);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response);
            console.log("dataSource mat:", _this.dataSource);
            _this.dataSource.sort = _this.sort;
        });
    };
    ListStudentComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListStudentComponent.prototype, "sort", void 0);
    ListStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-student',
            template: __webpack_require__(/*! ./list-student.component.html */ "./src/app/list-student/list-student.component.html"),
            styles: [__webpack_require__(/*! ./list-student.component.css */ "./src/app/list-student/list-student.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListStudentComponent);
    return ListStudentComponent;
}());

var DialogContent = /** @class */ (function () {
    function DialogContent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
    }
    DialogContent.prototype.deleteStudent = function (id) {
        var _this = this;
        console.log("delete : " + id);
        this.rest.delete("students", id).then(function (response) {
            alert("Student deleted.");
            _this.rest.getStudents().then(function (response) {
                console.log("res KV getStudents: ", response);
            });
            _this.router.navigate(['/liststudent']);
        });
    };
    DialogContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./delete_dialog.html */ "./src/app/list-student/delete_dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DialogContent);
    return DialogContent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <form name=\"loginForm\" (submit)=\"getLoggedIn(postForm)\" #postForm=\"ngForm\">\n<mat-card>\n   <mat-card-header color=\"primary\">\n     <mat-card-title>Login</mat-card-title>\n   </mat-card-header>\n   <mat-card-content>\n     <form class=\"example-form\">\n       <table class=\"example-full-width\" cellspacing=\"0\">\n         <tr>\n           <td>\n             <mat-form-field>\n               <mat-icon matPrefix class=\"icon\">email</mat-icon>\n             <input matInput placeholder=\"Username\" ngModel name=\"username\" #username=\"ngModel\" minlength=\"5\" required>\n                          <mat-error *ngIf=\"username.invalid\">Please enter last name.</mat-error>\n\n             <input matInput placeholder=\"Username\" ngModel name=\"username\" #username=\"ngModel\" minlength=\"5\" required>\n             <mat-error *ngIf=\"username.invalid\">Please enter User Name.</mat-error>\n             </mat-form-field>\n           </td>\n         </tr>\n         <tr>\n         <td><mat-form-field>\n           <mat-icon matPrefix class=\"icon\">lock</mat-icon>\n           <input matInput placeholder=\"Password\" ngModel type=\"password\" name=\"password\" #password=\"ngModel\" minlength=\"5\" required>\n           <mat-error *ngIf=\"password.invalid\">Please enter Password.</mat-error>\n         </mat-form-field>\n       </td>\n       </tr></table>\n     </form>\n   </mat-card-content>\n   <div style=\"margin-left:70px;\">\n   <mat-card-actions>\n     <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n   </mat-card-actions>\n</div>\n </mat-card>\n</form>\n</div>\n -->\n\n\n <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <form class=\"example-form\" name=\"loginData\" (submit)=\"getLoggedIn(postForm)\" #postForm=\"ngForm\">\n <mat-card>\n   <mat-card-header color=\"primary\">\n     <mat-card-title>Login</mat-card-title>\n   </mat-card-header>\n   <mat-card-content>\n   \n       <table class=\"example-full-width\" cellspacing=\"0\">\n         <tr>\n           <td>\n             <mat-form-field>\n              <mat-icon matPrefix class=\"icon\">email</mat-icon>\n             <input matInput placeholder=\"Username\" ngModel name=\"username\" #username=\"ngModel\" minlength=\"5\" required>\n             <mat-error *ngIf=\"username.invalid\">Please enter last name.</mat-error>\n             </mat-form-field>\n           </td>\n         </tr>\n         <tr>\n         <td><mat-form-field>\n          <mat-icon matPrefix class=\"icon\">lock</mat-icon>\n           <input matInput placeholder=\"Password\" ngModel type=\"password\" name=\"password\" #password=\"ngModel\" required>\n         </mat-form-field></td>\n       </tr></table>\n     \n   </mat-card-content>\n   <div style=\"margin-left:70px;\">\n   <mat-card-actions>\n     <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n   </mat-card-actions>\n </div>\n </mat-card>\n </form>\n </div> -->\n\n\n <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <form class=\"example-form\" name=\"loginData\" (submit)=\"getLoggedIn(postForm)\" #postForm=\"ngForm\">\n<mat-card>\n   <mat-card-header color=\"primary\">\n     <mat-card-title>Login</mat-card-title>\n   </mat-card-header>\n   <mat-card-content>\n   \n       <table class=\"example-full-width\" cellspacing=\"0\">\n         <tr>\n           <td>\n             <mat-form-field>\n              <mat-icon matPrefix class=\"icon\">email</mat-icon>\n             <input matInput placeholder=\"Username\" ngModel name=\"username\" #username=\"ngModel\" minlength=\"5\" required>\n             <mat-error *ngIf=\"username.invalid\">Please enter user name.</mat-error>\n             </mat-form-field>\n           </td>\n         </tr>\n         <tr>\n         <td><mat-form-field>\n          <mat-icon matPrefix class=\"icon\">lock</mat-icon>\n           <input matInput placeholder=\"Password\" ngModel type=\"password\" name=\"password\" #password=\"ngModel\" required>\n            <mat-error *ngIf=\"password.invalid\">Please enter password.</mat-error>\n         </mat-form-field></td>\n       </tr></table>\n     \n   </mat-card-content>\n   <div style=\"margin-left:70px;\">\n   <mat-card-actions>\n     <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n   </mat-card-actions>\n</div>\n </mat-card>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, api) {
        this.router = router;
        this.api = api;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.getLoggedIn = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.api.postLogin(form.value).then(function (response) {
            console.log("response: ", response);
            _this.router.navigateByUrl('/home');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/receipt/delete_receipt_dialog.html":
/*!****************************************************!*\
  !*** ./src/app/receipt/delete_receipt_dialog.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Student</h2>\n<mat-dialog-content>Are you sure?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button [mat-dialog-close]=\"true\" (click)=\"deleteReceipt(data.receiptId)\" >Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/receipt/edit-receipt.commponent.html":
/*!******************************************************!*\
  !*** ./src/app/receipt/edit-receipt.commponent.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-home></app-home>\n<h4>Edit Receipt</h4>\n<mat-sidenav-container>\n <form  name=\"receiptData\" (submit)=\"updateStudentFee(postForm.form)\" #postForm=\"ngForm\" *ngFor=\"let receipt of editReceiptData\">\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n      <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Session</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"session\" [(ngModel)]=\"receipt.session\" #session=\"ngModel\" required>\n    <mat-error *ngIf=\"session.invalid\">Please enter session.</mat-error>\n  </mat-form-field>\n  </div>\n\n<div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">book</mat-icon>\n    <input matInput value=\"\" name=\"class\" [(ngModel)]=\"receipt.class\" #class=\"ngModel\" readonly>\n    \n  </mat-form-field>\n  </div>\n\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Student Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput name=\"student_name\" [(ngModel)]=\"receipt.student_name\" #student_name=\"ngModel\" required>\n    <mat-error *ngIf=\"student_name.invalid\">Please enter student name.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Mother Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"mother_name\" [(ngModel)]=\"receipt.mother_name\" #mother_name=\"ngModel\" required>\n    <mat-error *ngIf=\"mother_name.invalid\">Please enter mother name.</mat-error>\n  </mat-form-field>\n  </div>\n\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Father Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"father_name\" [(ngModel)]=\"receipt.father_name\" #father_name=\"ngModel\" required>\n    <mat-error *ngIf=\"father_name.invalid\">Please enter father name.</mat-error>\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>SNo.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput type=\"number\" name=\"sno\" [(ngModel)]=\"receipt.sno\" #sno=\"ngModel\">\n  </mat-form-field>\n  </div>\n</div>\n\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n \n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">date_range</mat-icon>\t\n    <input matInput name=\"searchDate\" [(ngModel)]=\"receipt.searchDate\" #searchDate=\"ngModel\" readonly >\n    </mat-form-field>\n  </div>\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Pre Balance</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"pre_bal\" [(ngModel)]=\"receipt.pre_bal\" #pre_bal=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Form Chargs.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"form_chrgs\" [(ngModel)]=\"receipt.form_chrgs\" #form_chrgs=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Admission Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"adm_fee\" [(ngModel)]=\"receipt.adm_fee\" #adm_fee=\"ngModel\" required (ngModelChange)=\"getDepositeAmt(postForm)\">\n    <mat-error *ngIf=\"adm_fee.invalid\">Please enter Admission Fee.</mat-error>\n  </mat-form-field>\n  </div>\n\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Dearness Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"dearness_fee\" [(ngModel)]=\"receipt.dearness_fee\" #dearness_fee=\"ngModel\" required (ngModelChange)=\"getDepositeAmt(postForm)\">\n    <mat-error *ngIf=\"dearness_fee.invalid\">Please enter dearness fee.</mat-error>\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Devlop Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"dev_fee\" [(ngModel)]=\"receipt.dev_fee\" #dev_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Electric Fee.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"elec_fee\" [(ngModel)]=\"receipt.elec_fee\" #elec_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n </div>\n\n <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n      <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Library Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"lib_fee\" [(ngModel)]=\"receipt.lib_fee\" #lib_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Lab Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"lab_fee\" [(ngModel)]=\"receipt.lab_fee\" #lab_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Music Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"music_fee\" [(ngModel)]=\"receipt.music_fee\" #music_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Annual Func Chrgs</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"annual_func_fee\" [(ngModel)]=\"receipt.annual_func_fee\" #annual_func_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Exam Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"exam_fee\" [(ngModel)]=\"receipt.exam_fee\" #exam_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>S Class Fee.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"sclass\" [(ngModel)]=\"receipt.sclass\" #sclass=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n  \n </div>\n\n <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n     <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Tuition Fee</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"tution_fee\" [(ngModel)]=\"receipt.tution_fee\" #tution_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n      <!-- <mat-error *ngIf=\"form.get('tution_fee').invalid\">Please enter tution fee.</mat-error> -->\n      </mat-form-field>\n      </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Activity Fee</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"acti_fee\" [(ngModel)]=\"receipt.acti_fee\" #acti_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n      </mat-form-field>\n      </div>\n\n      <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Month</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <mat-select placeholder=\"Month\" name=\"monthName\"  [(ngModel)]=\"receipt.monthName\" #monthName=\"ngModel\">\n      <mat-option value=\"January\">January</mat-option>\n      <mat-option value=\"February\">February</mat-option>\n      <mat-option value=\"March\">March</mat-option>\n      <mat-option value=\"April\">April</mat-option>\n      <mat-option value=\"May\">May</mat-option>\n      <mat-option value=\"June\">June</mat-option>\n      <mat-option value=\"July\">July</mat-option>\n      <mat-option value=\"August\">August</mat-option>\n      <mat-option value=\"September\">September</mat-option>\n      <mat-option value=\"October\">October</mat-option>\n      <mat-option value=\"November\">November</mat-option>\n      <mat-option value=\"December\">December</mat-option>\n  </mat-select>\n      </mat-form-field>\n      </div>\n\n        <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Late Fee(if any)</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon> \n      <input matInput type=\"number\" name=\"late_fee\" [(ngModel)]=\"receipt.late_fee\" #late_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n      </mat-form-field>\n      </div>\n</div>\n\n <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n      \n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Total Amount</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"total_amount\" [(ngModel)]=\"receipt.total_amount\" #total_amount=\"ngModel\" required>\n      <mat-error *ngIf=\"total_amount.invalid\">Please enter total amount.</mat-error>\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Amount Deposite</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"amt_deposite\" [(ngModel)]=\"receipt.amt_deposite\" #amt_deposite=\"ngModel\" required>\n      <mat-error *ngIf=\"amt_deposite.invalid\">Please enter total amount.</mat-error>\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Balance Amount</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"bal_amt\" [(ngModel)]=\"receipt.bal_amt\"  #bal_amt=\"ngModel\">\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Remark</mat-label>       \n      <mat-icon matPrefix class=\"icon\">pencil</mat-icon>\n      <input matInput  name=\"remark\" [(ngModel)]=\"receipt.remark\" #remark=\"ngModel\">\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Received By</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n       <mat-select placeholder=\"Received By\" name=\"received_by\" [(ngModel)]=\"receipt.received_by\" #received_by=\"ngModel\">\n      <mat-option value=\"Admin\">Admin</mat-option>\n      <mat-option value=\"Sales\">Sales</mat-option>\n    </mat-select>\n      </mat-form-field>\n      </div>\n  </div>\n\n\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"left\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"button-row\">\n  \t <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n  \t  <button mat-raised-button color=\"primary\">Reset</button>\n\n  </div>\n  \n\n</div>\n</form>\n</mat-sidenav-container>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/receipt/edit-receipt.commponent.ts":
/*!****************************************************!*\
  !*** ./src/app/receipt/edit-receipt.commponent.ts ***!
  \****************************************************/
/*! exports provided: EditReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReceiptComponent", function() { return EditReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditReceiptComponent = /** @class */ (function () {
    function EditReceiptComponent(rest, dialog, route, router) {
        this.rest = rest;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.sum = 0;
        this.displayedColumns = ['roll_number', 'first_name', 'father_name', 'mother_name', 'class', 'dob', 'uId'];
    }
    EditReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log("std id: " + [params['id']]);
            _this.edirReceiptId = params['id'];
            _this.rest.getReceiptById(params['id']).then(function (response) {
                console.log("res KV: ", response);
                _this.editReceiptData = response;
                console.log("editReceiptData receipt :", _this.editReceiptData);
            });
        });
    };
    EditReceiptComponent.prototype.updateStudentFee = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        console.log("update form: ", form);
        console.log("id: " + this.edirReceiptId);
        if (this.sum > 0) {
            //form.controls.amt_deposite.value = this.sum;
            form.controls.amt_deposite.setValue(this.sum);
        }
        console.log("update form2: ", form);
        this.rest.update('receipt', this.edirReceiptId, form.value).then(function (response) {
            alert("Receipt added. !!");
            _this.router.navigate(['/receiptList']);
        });
    };
    EditReceiptComponent.prototype.getDepositeAmt = function (formData) {
        console.log("val:", formData);
        console.log(formData.controls.pre_bal.value);
        console.log(formData.controls.form_chrgs.value);
        if (formData.controls.pre_bal.value == '') {
            formData.controls.pre_bal.value = 0;
        }
        if (formData.controls.form_chrgs.value == '') {
            formData.controls.form_chrgs.value = 0;
        }
        if (formData.controls.adm_fee.value == '') {
            formData.controls.adm_fee.value = 0;
        }
        if (formData.controls.dearness_fee.value == '') {
            formData.controls.dearness_fee.value = 0;
        }
        if (formData.controls.dev_fee.value == '') {
            formData.controls.dev_fee.value = 0;
        }
        if (formData.controls.elec_fee.value == '') {
            formData.controls.elec_fee.value = 0;
        }
        if (formData.controls.lib_fee.value == '') {
            formData.controls.lib_fee.value = 0;
        }
        if (formData.controls.lab_fee.value == '') {
            formData.controls.lab_fee.value = 0;
        }
        if (formData.controls.music_fee.value == '') {
            formData.controls.music_fee.value = 0;
        }
        if (formData.controls.annual_func_fee.value == '') {
            formData.controls.annual_func_fee.value = 0;
        }
        if (formData.controls.exam_fee.value == '') {
            formData.controls.exam_fee.value = 0;
        }
        if (formData.controls.sclass.value == '') {
            formData.controls.sclass.value = 0;
        }
        if (formData.controls.tution_fee.value == '') {
            formData.controls.tution_fee.value = 0;
        }
        if (formData.controls.acti_fee.value == '') {
            formData.controls.acti_fee.value = 0;
        }
        if (formData.controls.late_fee.value == '') {
            formData.controls.late_fee.value = 0;
        }
        var depositeAmt = +(formData.controls.pre_bal.value) + (formData.controls.form_chrgs.value) + (formData.controls.adm_fee.value) + (formData.controls.dearness_fee.value) + (formData.controls.dev_fee.value)
            + (formData.controls.elec_fee.value) + (formData.controls.lib_fee.value) + (formData.controls.lab_fee.value) + (formData.controls.music_fee.value)
            + (formData.controls.annual_func_fee.value) + (formData.controls.exam_fee.value) + (formData.controls.sclass.value) + (formData.controls.tution_fee.value) + (formData.controls.acti_fee.value) + (formData.controls.late_fee.value);
        this.sum = depositeAmt;
        formData.controls.amt_deposite.value = this.sum;
        console.log("sum:: " + this.sum);
    };
    EditReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-receipt',
            template: __webpack_require__(/*! ./edit-receipt.commponent.html */ "./src/app/receipt/edit-receipt.commponent.html"),
            styles: [__webpack_require__(/*! ./receipt.component.css */ "./src/app/receipt/receipt.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditReceiptComponent);
    return EditReceiptComponent;
}());



/***/ }),

/***/ "./src/app/receipt/list-receipt.component.html":
/*!*****************************************************!*\
  !*** ./src/app/receipt/list-receipt.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<p>Receipt list </p>\n<mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n<mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"session\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Session</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">{{element.session }} \n            </mat-cell>\n        </ng-container>\n\n  <ng-container matColumnDef=\"class\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Class</mat-header-cell>\n            <mat-cell  *matCellDef=\"let element \">{{element.class | titlecase }} \n            </mat-cell>\n        </ng-container>\n\n  <!-- Name Column -->\n   <ng-container matColumnDef=\"student_name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Student Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.student_name | titlecase }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"father_name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Father Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.father_name | titlecase }} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"mother_name\">\n    <mat-header-cell  *matHeaderCellDef mat-sort-header> Mother Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.mother_name | titlecase }} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"total_amount\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Total Fee </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.total_amount}} </mat-cell>\n  </ng-container>\n\n<ng-container matColumnDef=\"amt_deposite\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Amount Deposite</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.amt_deposite }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"pre_bal\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Pre Balance</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.pre_bal }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"bal_amount\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Balance Amount</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.bal_amount }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"annual_func_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Annual Func Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.annual_func_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"dearness_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Dearness Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.dearness_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"dev_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Dev Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.dev_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"elec_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Elec. Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.elec_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"exam_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Exam Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.exam_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"form_chrgs\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Form Chargs</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.form_chrgs }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"lab_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Lab Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.lab_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"lib_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Lib Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.lib_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"monthName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>month Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.monthName }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"music_fee\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Music Fee</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.music_fee }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"received_by\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Received By</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.received_by }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"remark\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Remark</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.remark }}\n            </mat-cell>\n        </ng-container>\n\n         <ng-container matColumnDef=\"sclass\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Sclass</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.sclass }}\n            </mat-cell>\n        </ng-container>\n\n         <ng-container matColumnDef=\"searchDate\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let element \">  {{ element.searchDate }}\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"uId\">\n            <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>\n            <mat-cell [routerLink]=\"['/editReceipt',element.uId]\" *matCellDef=\"let element\"><mat-icon  matTooltip=\"Edit Receipt\" matPrefix class=\"icon\">edit</mat-icon> <mat-icon (click)=\"openDialog(element)\" matTooltip=\"Delete Receipt\" matPrefix class=\"icon\">delete</mat-icon>\n            </mat-cell>\n        </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/receipt/list-receipt.component.ts":
/*!***************************************************!*\
  !*** ./src/app/receipt/list-receipt.component.ts ***!
  \***************************************************/
/*! exports provided: ListReceiptComponent, DialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReceiptComponent", function() { return ListReceiptComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ListReceiptComponent = /** @class */ (function () {
    function ListReceiptComponent(rest, dialog) {
        this.rest = rest;
        this.dialog = dialog;
        this.displayedColumns = ['session', 'class', 'student_name', 'father_name', 'mother_name', 'total_amount', 'amt_deposite', 'pre_bal', 'bal_amount', 'annual_func_fee', 'dearness_fee', 'dev_fee', 'elec_fee', 'exam_fee', 'form_chrgs', 'lab_fee', 'lib_fee', 'monthName', 'music_fee', 'received_by', 'remark', 'sclass', 'searchDate', 'uId'];
    }
    ListReceiptComponent.prototype.openDialog = function (receiptData) {
        console.log("receiptData console: ", receiptData);
        var dialogRef = this.dialog.open(DialogContent, {
            data: {
                receiptId: receiptData.uId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            console.log("Dialog result: ", result);
        });
    };
    ListReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getReceipt().then(function (response) {
            console.log("res KV: ", response);
            _this.dataSource = response;
            console.log("dataSource receipt :", _this.dataSource);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response);
            _this.dataSource.sort = _this.sort;
        });
    };
    ListReceiptComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListReceiptComponent.prototype, "sort", void 0);
    ListReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-receipt',
            template: __webpack_require__(/*! ./list-receipt.component.html */ "./src/app/receipt/list-receipt.component.html"),
            styles: [__webpack_require__(/*! ./receipt.component.css */ "./src/app/receipt/receipt.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListReceiptComponent);
    return ListReceiptComponent;
}());

var DialogContent = /** @class */ (function () {
    function DialogContent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
    }
    DialogContent.prototype.deleteReceipt = function (id) {
        var _this = this;
        console.log("delete receipt : " + id);
        this.rest.delete("receipt", id).then(function (response) {
            alert("receipt deleted.");
            _this.rest.getReceipt().then(function (response) {
                console.log("res KV getReceipt: ", response);
            });
            _this.router.navigate(['/receiptList']);
        });
    };
    DialogContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./delete_receipt_dialog.html */ "./src/app/receipt/delete_receipt_dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DialogContent);
    return DialogContent;
}());



/***/ }),

/***/ "./src/app/receipt/receipt.component.css":
/*!***********************************************!*\
  !*** ./src/app/receipt/receipt.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/receipt/receipt.component.html":
/*!************************************************!*\
  !*** ./src/app/receipt/receipt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<mat-sidenav-container>\n <form  name=\"receiptData\" (submit)=\"saveStudentFee(postForm.form)\" #postForm=\"ngForm\">\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n      <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Session</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"session\" ngModel #session=\"ngModel\" required>\n    <mat-error *ngIf=\"session.invalid\">Please enter session.</mat-error>\n  </mat-form-field>\n  </div>\n\n<div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">book</mat-icon>\n    <mat-select placeholder=\"Class\"  name=\"class\"  ngModel #class=\"ngModel\" required>\n      <mat-option *ngFor=\"let class of classData;\" value=\"{{class.id}}\">{{class.name}}</mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"class.invalid\">Please select class.</mat-error>\n  </mat-form-field>\n  </div>\n\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Student Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput name=\"student_name\" ngModel #student_name=\"ngModel\" required>\n    <mat-error *ngIf=\"student_name.invalid\">Please enter student name.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Mother Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"mother_name\" ngModel #mother_name=\"ngModel\" required>\n    <mat-error *ngIf=\"mother_name.invalid\">Please enter mother name.</mat-error>\n  </mat-form-field>\n  </div>\n\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Father Name</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"father_name\" ngModel #father_name=\"ngModel\" required>\n    <mat-error *ngIf=\"father_name.invalid\">Please enter father name.</mat-error>\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>SNo.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput name=\"sno\" ngModel #sno=\"ngModel\" >\n  </mat-form-field>\n  </div>\n</div>\n\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n \n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">date_range</mat-icon>\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"searchDate\" [(ngModel)]=\"todayDate\" #searchDate=\"ngModel\" >\n    <mat-datepicker-toggle matPrefix [for]=\"picker\">\n    </mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </div>\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Pre Balance</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"pre_bal\" ngModel #pre_bal=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Form Chargs.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"form_chrgs\" ngModel #form_chrgs=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Admission Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"adm_fee\" ngModel #adm_fee=\"ngModel\" required (ngModelChange)=\"getDepositeAmt(postForm)\">\n    <mat-error *ngIf=\"adm_fee.invalid\">Please enter Admission Fee.</mat-error>\n  </mat-form-field>\n  </div>\n\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Dearness Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"dearness_fee\" ngModel #dearness_fee=\"ngModel\" required (ngModelChange)=\"getDepositeAmt(postForm)\">\n    <mat-error *ngIf=\"dearness_fee.invalid\">Please enter dearness fee.</mat-error>\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Devlop Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"dev_fee\" ngModel #dev_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Electric Fee.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"elec_fee\" ngModel #elec_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n </div>\n\n <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n      <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Library Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"lib_fee\" ngModel #lib_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n    <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Lab Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"lab_fee\" ngModel #lab_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Music Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"music_fee\" ngModel #music_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Annual Func Chrgs</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"annual_func_fee\" ngModel #annual_func_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>Exam Fee</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"exam_fee\" ngModel #exam_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-label>S Class Fee.</mat-label>       \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput type=\"number\" name=\"sclass\" ngModel #sclass=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n  </mat-form-field>\n  </div>\n\n  \n </div>\n\n <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n     <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Tuition Fee</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"tution_fee\" ngModel #tution_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n      <!-- <mat-error *ngIf=\"form.get('tution_fee').invalid\">Please enter tution fee.</mat-error> -->\n      </mat-form-field>\n      </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Activity Fee</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"acti_fee\" ngModel #acti_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n      </mat-form-field>\n      </div>\n\n      <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Month</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <mat-select placeholder=\"Month\" name=\"monthName\"  ngModel #monthName=\"ngModel\">\n      <mat-option value=\"January\">January</mat-option>\n      <mat-option value=\"February\">February</mat-option>\n      <mat-option value=\"March\">March</mat-option>\n      <mat-option value=\"April\">April</mat-option>\n      <mat-option value=\"May\">May</mat-option>\n      <mat-option value=\"June\">June</mat-option>\n      <mat-option value=\"July\">July</mat-option>\n      <mat-option value=\"August\">August</mat-option>\n      <mat-option value=\"September\">September</mat-option>\n      <mat-option value=\"October\">October</mat-option>\n      <mat-option value=\"November\">November</mat-option>\n      <mat-option value=\"December\">December</mat-option>\n  </mat-select>\n      </mat-form-field>\n      </div>\n\n        <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Late Fee(if any)</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon> \n      <input matInput type=\"number\" name=\"late_fee\" ngModel #late_fee=\"ngModel\" (ngModelChange)=\"getDepositeAmt(postForm)\">\n      </mat-form-field>\n      </div>\n</div>\n\n <div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n      \n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Total Amount</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"total_amount\" ngModel #total_amount=\"ngModel\" required>\n      <mat-error *ngIf=\"total_amount.invalid\">Please enter total amount.</mat-error>\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Amount Deposite</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"amt_deposite\" [(ngModel)]=\"sum\" readonly #amt_deposite=\"ngModel\" required>\n      <mat-error *ngIf=\"amt_deposite.invalid\">Please enter total amount.</mat-error>\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Balance Amount</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n      <input matInput type=\"number\" name=\"bal_amt\" ngModel  #bal_amt=\"ngModel\">\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Remark</mat-label>       \n      <mat-icon matPrefix class=\"icon\">pencil</mat-icon>\n      <input matInput  name=\"remark\" ngModel #remark=\"ngModel\">\n      </mat-form-field>\n      </div>\n\n       <div class=\"item item-3\" fxFlex=\"15%\">\n      <mat-form-field >\n      <mat-label>Received By</mat-label>       \n      <mat-icon matPrefix class=\"icon\">money</mat-icon>\n       <mat-select placeholder=\"Received By\" name=\"received_by\" ngModel #received_by=\"ngModel\">\n      <mat-option value=\"Admin\">Admin</mat-option>\n      <mat-option value=\"Sales\">Sales</mat-option>\n    </mat-select>\n      </mat-form-field>\n      </div>\n  </div>\n\n\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"left\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"button-row\">\n  \t <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n  \t  <button mat-raised-button color=\"primary\">Reset</button>\n\n  </div>\n  \n\n</div>\n</form>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/receipt/receipt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/receipt/receipt.component.ts ***!
  \**********************************************/
/*! exports provided: ReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptComponent", function() { return ReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class */ "./src/app/class.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReceiptComponent = /** @class */ (function () {
    function ReceiptComponent(datePipe, rest) {
        this.datePipe = datePipe;
        this.rest = rest;
        this.studentData = {};
        this.classData = _class__WEBPACK_IMPORTED_MODULE_2__["CLASSES"];
        this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log("date: " + (new Date()));
    }
    ReceiptComponent.prototype.ngOnInit = function () {
    };
    ReceiptComponent.prototype.saveStudentFee = function (form) {
        if (form.invalid) {
            return;
        }
        /*let keys = Object.keys(form.controls);
        let values = Object.values(form.value);*/
        console.log("form: ", form.value);
        this.rest.postReceipt(form.value).then(function (response) {
            console.log("post 1");
            alert("Receipt added. !!");
        });
    };
    ReceiptComponent.prototype.getDepositeAmt = function (formData) {
        console.log("val:", formData);
        console.log(formData.controls.pre_bal.value);
        console.log(formData.controls.form_chrgs.value);
        if (formData.controls.pre_bal.value == '') {
            formData.controls.pre_bal.value = 0;
        }
        if (formData.controls.form_chrgs.value == '') {
            formData.controls.form_chrgs.value = 0;
        }
        if (formData.controls.adm_fee.value == '') {
            formData.controls.adm_fee.value = 0;
        }
        if (formData.controls.dearness_fee.value == '') {
            formData.controls.dearness_fee.value = 0;
        }
        if (formData.controls.dev_fee.value == '') {
            formData.controls.dev_fee.value = 0;
        }
        if (formData.controls.elec_fee.value == '') {
            formData.controls.elec_fee.value = 0;
        }
        if (formData.controls.lib_fee.value == '') {
            formData.controls.lib_fee.value = 0;
        }
        if (formData.controls.lab_fee.value == '') {
            formData.controls.lab_fee.value = 0;
        }
        if (formData.controls.music_fee.value == '') {
            formData.controls.music_fee.value = 0;
        }
        if (formData.controls.annual_func_fee.value == '') {
            formData.controls.annual_func_fee.value = 0;
        }
        if (formData.controls.exam_fee.value == '') {
            formData.controls.exam_fee.value = 0;
        }
        if (formData.controls.sclass.value == '') {
            formData.controls.sclass.value = 0;
        }
        if (formData.controls.tution_fee.value == '') {
            formData.controls.tution_fee.value = 0;
        }
        if (formData.controls.acti_fee.value == '') {
            formData.controls.acti_fee.value = 0;
        }
        if (formData.controls.late_fee.value == '') {
            formData.controls.late_fee.value = 0;
        }
        var depositeAmt = +(formData.controls.pre_bal.value) + (formData.controls.form_chrgs.value) + (formData.controls.adm_fee.value) + (formData.controls.dearness_fee.value) + (formData.controls.dev_fee.value)
            + (formData.controls.elec_fee.value) + (formData.controls.lib_fee.value) + (formData.controls.lab_fee.value) + (formData.controls.music_fee.value)
            + (formData.controls.annual_func_fee.value) + (formData.controls.exam_fee.value) + (formData.controls.sclass.value) + (formData.controls.tution_fee.value) + (formData.controls.acti_fee.value) + (formData.controls.late_fee.value);
        this.sum = depositeAmt;
    };
    ReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipt',
            template: __webpack_require__(/*! ./receipt.component.html */ "./src/app/receipt/receipt.component.html"),
            styles: [__webpack_require__(/*! ./receipt.component.css */ "./src/app/receipt/receipt.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], ReceiptComponent);
    return ReceiptComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _firebasewrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebasewrapper */ "./src/app/firebasewrapper.js");
/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }
}
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var firewrap = new _firebasewrapper__WEBPACK_IMPORTED_MODULE_2__["FirebaseWrapper"]();
//import firebase from "firebase";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
        'Authorization': 'did' })
};
var RestService = /** @class */ (function () {
    function RestService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'http://localhost:5001/sql';
    }
    RestService.prototype.getStudents = function () {
        //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
        return firewrap.selectAll('students');
        //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
    };
    RestService.prototype.getBooks = function () {
        //const body = JSON.stringify({"fn": 'selectAll', "params": ["books"]});
        return firewrap.selectAll('books');
    };
    RestService.prototype.postStudent = function (student) {
        return firewrap.addStudent(student);
        //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
    };
    RestService.prototype.postReceipt = function (receiptDate) {
        console.log("rest postReceipt");
        return firewrap.addReceipt(receiptDate);
        //return this.httpClient.post(`${this.API_URL}`,studentData, httpOptions)
    };
    RestService.prototype.getReceipt = function () {
        //const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
        return firewrap.selectAll('receipt');
        //return  this.httpClient.post(`${this.API_URL}`,body, httpOptions)
    };
    RestService.prototype.getReceiptById = function (id) {
        return firewrap.selectAllById('receipt', id);
    };
    RestService.prototype.update = function (tableName, id, data) {
        return firewrap.update(tableName, id, data);
    };
    RestService.prototype.delete = function (tableName, id) {
        return firewrap.deleteData(tableName, id);
    };
    RestService.prototype.getStudentsById = function (id) {
        return firewrap.selectAllById('students', id);
    };
    RestService.prototype.postBook = function (bookData) {
        return this.httpClient.post("" + this.API_URL, bookData, httpOptions);
    };
    RestService.prototype.getClasses = function () {
        //const body = JSON.stringify({"fn": 'selectAll', "params": ["class"]});
        return firewrap.selectAll('class');
    };
    RestService.prototype.getRollNumber = function (classId) {
        return this.httpClient.post("" + this.API_URL, classId, httpOptions);
    };
    RestService.prototype.postEditStudent = function (editStudentData) {
        return this.httpClient.post("" + this.API_URL, editStudentData, httpOptions);
    };
    RestService.prototype.postLogin = function (body) {
        return firewrap.login(body);
    };
    RestService.prototype.postAttendance = function (body) {
        return this.httpClient.post("" + this.API_URL, body, httpOptions);
    };
    RestService.prototype.deleteRowAttendance = function (body) {
        return this.httpClient.post("" + this.API_URL, body, httpOptions);
    };
    RestService.prototype.getAttendanceByClass = function (body) {
        return this.httpClient.post("" + this.API_URL, body, httpOptions);
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());

;


/***/ }),

/***/ "./src/app/save_dialog.html":
/*!**********************************!*\
  !*** ./src/app/save_dialog.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Save Student</h2>\n<mat-dialog-content>Student Saved !!</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>OK</button>\n  \n  <!-- <button mat-button [mat-dialog-close]=\"true\" (click)=\"deleteStudent(data.studentId)\" >Yes</button> -->\n</mat-dialog-actions>\n\n<!-- <h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div> -->"

/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-preview{\n\theight: 5rem;\n\tmargin: 1rem 0;\n\n}\n.image-preview img {\n\theight: 100%;\n}"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n <mat-sidenav-container>\n <form [formGroup]=\"form\" name=\"studentData\" (submit)=\"submitStudent()\"  class=\"student-form\">\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n  \t <mat-form-field class=\"navigation-items\">\n  \t <mat-label>Student Name</mat-label>       \n  \t<mat-icon matPrefix class=\"icon\">face</mat-icon>\n    <input matInput value=\"\" name=\"first_name\" formControlName=\"first_name\">\n     <mat-error *ngIf=\"form.get('first_name').invalid\">Please enter first name.</mat-error> \n  </mat-form-field>\n  </div>\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Last Name\" name=\"last_name\" formControlName=\"last_name\">\n     <mat-error *ngIf=\"form.get('last_name').invalid\">Please enter last name.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Adhaar No\" name=\"adhaar_no\" formControlName=\"adhaar_no\">\n     <mat-error *ngIf=\"form.get('adhaar_no').invalid\">Please enter last name.</mat-error> \n    \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Category\"  name=\"category\" >\n      <mat-option value=\"OBC\">OBC</mat-option>\n      <mat-option value=\"Gen\">Gen</mat-option>\n      <mat-option value=\"SC\">SC</mat-option>\n      <mat-option value=\"ST\">ST</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Religion\"  name=\"religion\" >\n      <mat-option value=\"HINDU\">HINDU</mat-option>\n      <mat-option value=\"MUSLIM\">MUSLIM</mat-option>\n      <mat-option value=\"SIKH\">SIKH</mat-option>\n      <mat-option value=\"CHRISTIAN\">CHRISTIAN</mat-option>\n      <mat-option value=\"BODH\">BODH</mat-option>\n      <mat-option value=\"JAIN\">JAIN</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Handicapped\"  name=\"handicapped\" >\n      <mat-option value=\"YES\">Yes</mat-option>\n      <mat-option value=\"NO\">No</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-2\" fxFlex=\"15%\">\n  \t<mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Name\" name=\"father_name\" formControlName=\"father_name\">\n     <mat-error *ngIf=\"form.get('father_name').invalid\">Please enter father name.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Qualification\" name=\"father_qualification\" formControlName=\"father_qualification\">\n     <mat-error *ngIf=\"form.get('father_qualification').invalid\">Please enter father Qualification.</mat-error> \n     \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Father Occupation\" name=\"father_occupation\" formControlName=\"father_occupation\">\n     <mat-error *ngIf=\"form.get('father_occupation').invalid\">Please enter father Occupation.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n  \t<mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Name\" name=\"mother_name\" formControlName=\"mother_name\">\n    <mat-error *ngIf=\"form.get('mother_name').invalid\">Please enter mother name.</mat-error>\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Qualification\" name=\"mother_qualification\" formControlName=\"mother_qualification\"> \n     \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n    <input matInput placeholder=\"Mother Occupation\" name=\"mother_occupation\" formControlName=\"mother_occupation\">\n  </mat-form-field>\n  </div>\n  \n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n  \t <mat-form-field class=\"navigation-items\">\n  \t <mat-label>Gender</mat-label>       \n  \t<mat-icon matPrefix class=\"icon\">sex</mat-icon>\n    <mat-select placeholder=\"gender\"  name=\"gender\" formControlName=\"gender\">\n      <mat-option value=\"male\">Male</mat-option>\n      <mat-option value=\"female\">Female</mat-option>\n    </mat-select>\n<mat-error *ngIf=\"form.get('gender').invalid\">Please select gender.</mat-error> \n  </mat-form-field>\n  </div>\n  <div class=\"item item-2\" fxFlex=\"15%\">\n  \t<mat-form-field >\n  \t\t <mat-label>Address</mat-label>  \n    <mat-icon matPrefix class=\"icon\">place</mat-icon>\n        <textarea matInput name=\"address\" formControlName=\"address\"></textarea>\n         <mat-error *ngIf=\"form.get('address').invalid\">Please enter address.</mat-error>\n\n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n  \t<mat-form-field >\n  \t\t <mat-label>Phone1</mat-label> \n    <mat-icon matPrefix class=\"icon\">call</mat-icon>\n    <input matInput placeholder=\"Contact\" name=\"contact_number\" formControlName=\"contact_number\">\n      <mat-error *ngIf=\"form.get('contact_number').invalid\">Please enter contact.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Phone2</mat-label> \n    <mat-icon matPrefix class=\"icon\">call</mat-icon>\n    <input matInput placeholder=\"Contact\" name=\"contact_number2\" >\n  </mat-form-field>\n  </div>\n\n   <div class=\"item item-3\" fxFlex=\"15%\">\n    <mat-form-field >\n       <mat-label>Annual Income</mat-label> \n    <mat-icon matPrefix class=\"icon\">money</mat-icon>\n    <input matInput placeholder=\"Income\" name=\"annual_income\" formControlName=\"annual_income\" >\n    <mat-error *ngIf=\"form.get('annual_income').invalid\">Please enter annual income.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"miniority\"  name=\"miniority\" >\n      <mat-option value=\"YES\">Yes</mat-option>\n      <mat-option value=\"NO\">No</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1\" fxFlex=\"15%\">\n  \t <mat-form-field class=\"navigation-items\">\n  \t <mat-label>Email</mat-label>       \n  \t<mat-icon matPrefix class=\"icon\">email</mat-icon>\n    <input matInput value=\"\" name=\"email\" formControlName=\"email\">\n     <mat-error *ngIf=\"form.get('email').invalid\">Please enter valid email address.</mat-error> \n   \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-2\" fxFlex=\"15%\">\n    <mat-form-field >\n    <mat-icon matPrefix class=\"icon\">perm_identity</mat-icon>\n   <mat-select placeholder=\"Only Child\"  name=\"only_child\" formControlName=\"only_child\">\n      <mat-option value=\"YES\">Yes</mat-option>\n      <mat-option value=\"NO\">No</mat-option>\n    </mat-select>\n\n     <mat-error *ngIf=\"form.get('only_child').invalid\">Please enter only_child.</mat-error> \n  </mat-form-field>\n</div>\n  <div class=\"item item-2\" fxFlex=\"15%\">\n  \t<mat-form-field >\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"DOB\" name=\"dob\" formControlName=\"dob\">\n  <mat-datepicker-toggle matPrefix [for]=\"picker\">\n    \n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n   <mat-error *ngIf=\"form.get('dob').invalid\">Please enter dob.</mat-error> \n  </mat-form-field>\n  </div>\n\n  <div class=\"item item-3\" fxFlex=\"15%\">\n  \t<mat-form-field >\n    <mat-icon matPrefix class=\"icon\">book</mat-icon>\n    <mat-select placeholder=\"Class\"  name=\"class\" formControlName=\"class\">\n      <mat-option *ngFor=\"let class of classData;\" value=\"{{class.id}}\">{{class.name}}</mat-option>\n    </mat-select>\n     <mat-error *ngIf=\"form.get('class').invalid\">Please select class.</mat-error> \n  </mat-form-field>\n  </div>\n<div class=\"item item-1\" fxFlex=\"15%\">\n    <button mat-stroked-button  type=\"button\" color=\"primary\" (click)=\"filePicker.click()\">Pick Image</button>\n    <input type=\"file\"  style=\"display: none;\" #filePicker (change)=\"onImagePicked($event)\">\n  </div>\n  <div class=\"image-preview\" *ngIf=\"imagePreview !='' && imagePreview\">\n    <img [src]=\"imagePreview\" [alt]=\"form.value.first_name\">\n  </div>\n</div>\n\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"left\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n  <div class=\"button-row\">\n  \t <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n  \t  <button mat-raised-button color=\"primary\">Reset</button>\n\n  </div>\n  \n\n</div>\n\n</form>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent, SaveDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDialogContent", function() { return SaveDialogContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class */ "./src/app/class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var StudentComponent = /** @class */ (function () {
    function StudentComponent(rest, route, router, dialog, datePipe) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.studentData = {};
        this.classData = _class__WEBPACK_IMPORTED_MODULE_3__["CLASSES"];
        /*this.rest.getClasses().subscribe((response) => {
        console.log("res KV class: ",response);
        this.classData = response;
        });*/
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'father_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'mother_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'contact_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'class': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'adhaar_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]
            }),
            'father_occupation': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]
            }),
            'father_qualification': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]
            }),
            'only_child': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'annual_income': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]
            }),
        });
    };
    StudentComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
    };
    StudentComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    StudentComponent.prototype.submitStudent = function () {
        var _this = this;
        this.form.value.dob = this.datePipe.transform(this.form.value.dob, 'yyyy-MM-dd');
        this.rest.postStudent(this.form.value).then(function (response) {
            _this.openDialog();
            console.log("Student added. !!");
            _this.form.reset();
        });
    };
    StudentComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(SaveDialogContent);
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], StudentComponent);
    return StudentComponent;
}());

var SaveDialogContent = /** @class */ (function () {
    function SaveDialogContent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
    }
    SaveDialogContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'save-dialog',
            template: __webpack_require__(/*! ../save_dialog.html */ "./src/app/save_dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SaveDialogContent);
    return SaveDialogContent;
}());



/***/ }),

/***/ "./src/app/student/studentDetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/student/studentDetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<p>Student Detail</p>"

/***/ }),

/***/ "./src/app/student/studentDetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/student/studentDetail.component.ts ***!
  \****************************************************/
/*! exports provided: StudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailComponent", function() { return StudentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent() {
        console.log("StudentDetailComponent");
    }
    StudentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-detail',
            template: __webpack_require__(/*! ./studentDetail.component.html */ "./src/app/student/studentDetail.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function (registration) {
            console.log('anp service worker registered.', registration);
        }, function (err) {
            console.error('ServiceWorker registration failed: ', err);
        });
    });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aryabhatta/Music/did/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map