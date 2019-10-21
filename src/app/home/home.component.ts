import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
host:string;
hostFlag=true;
  constructor(private api: RestService,private router: Router) { }

  ngOnInit() {
    console.log("host: "+(window.location.hostname));
    this.host = window.location.hostname;
  }
  ngAfterViewInit() {
    this.host = window.location.hostname;
    if(this.host === 'disd-aaa.firebaseapp.com' || this.host === 'disd-aaa.web.app' || this.host === 'localhost'){
      this.hostFlag = false;
      console.log("after: "+this.hostFlag);
    }
}
  logout(){
    this.api.logout().then((response)=>{
      this.router.navigateByUrl('/');
      localStorage.removeItem('access_token');
    })
  }

}
