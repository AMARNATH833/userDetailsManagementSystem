import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../user';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css'],
  providers:[AuthService]
})
export class DashBoardComponent implements OnInit {

  users:Users[]=[];
count: any;


  constructor(private auth:AuthService,private router:Router) { }
  
  ngOnInit() {
  }
  logout(){
    this.auth.loggedIn=false;
    this.router.navigate(['/home']);
  }
}
