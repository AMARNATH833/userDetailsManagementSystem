import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../user';
import { UserService } from '../user.service';
import {AuthService} from '../auth.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  title="admin";
  users:Users[]=[];
  p:number=1;

  // public linkURL="http://localhost:3000/details";

  constructor(private userservice:UserService,private http:HttpClient,private router:Router,private auth:AuthService) {}

  ngOnInit() :void{
    this.userservice.getDetails().subscribe(response=>{this.users=response})
  }

  deleteUser(val: Number){
    if(confirm("Are you sure to delete this data ?")){
    this.userservice.deleteUser(val).subscribe(data=>{});
    this.userservice.getDetails().subscribe((response)=>{
    this.users=response;
    });
  }
  }

  update(id:Number){
    this.router.navigate(['/update',id]);
  }
  logout(){
    this.userservice.loggedIn=false;
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}