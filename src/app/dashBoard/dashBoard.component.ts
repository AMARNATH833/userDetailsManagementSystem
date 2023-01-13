import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../user';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { name } from '../verify.validation';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css'],
  providers:[AuthService]
})
export class DashBoardComponent implements OnInit {

  mug:Users[]=[];
  count: any;

  
  nameValue=localStorage.getItem('name');
  passwordValue=localStorage.getItem('password');
  
  constructor(private auth:AuthService,private router:Router,private userservice:UserService) { }
  
  ngOnInit() {
    console.log(this.nameValue)
    this.userservice.getUserDetails().subscribe(response=>{this.mug=response})
    
  }

  logout(){
    // alert("You logged out of the Site")
    this.auth.loggedIn=false;
    localStorage.removeItem('password')
    localStorage.removeItem('name')
    this.mug=[];
    this.router.navigate(['/home']);

  }
}