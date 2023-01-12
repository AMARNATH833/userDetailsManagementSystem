import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../user';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css'],
  providers:[AuthService]
})
export class DashBoardComponent implements OnInit {

  users:Users[]=[];
  count: any;


  constructor(private auth:AuthService,private router:Router,private userservice:UserService) { }
  
  ngOnInit() {
    this.userservice.getDetails().subscribe(response=>{this.users=response})
  }

  logout(){
    alert("You logged out of the Site")
    this.auth.loggedIn=false;
    this.router.navigate(['/home']);
  }
}