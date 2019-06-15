import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
flag: boolean;
  constructor(private router: Router,private api:RestService,private Auth: AuthGuard) { }

  ngOnInit() { }

  getLoggedIn(form:NgForm){
  	if(form.invalid){
  		return;
  	}

    this.api.postLogin(form.value).then((response)=>{
  	     console.log("login response: "+response.refreshToken);
         localStorage.setItem('access_token', response.refreshToken);
         let token = localStorage.getItem('access_token');

         this.flag = this.Auth.canActivate();
                    console.log("flag: ",this.flag);
                    if(this.flag === true){
                      this.router.navigate(['dashboard']);
                    }else{
                      this.router.navigate(['']);
                    }

         //this.router.navigateByUrl('/home');
  	});
  }
}
