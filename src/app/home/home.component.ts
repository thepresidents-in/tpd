import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: RestService,private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.api.logout().then((response)=>{
      this.router.navigateByUrl('/');
      localStorage.removeItem('access_token');
    })
  }
 

}
