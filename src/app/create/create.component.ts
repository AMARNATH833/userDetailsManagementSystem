import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  users:Users[]=[];

  response:any;
  value:any;

  constructor(private userservice:UserService,private router:Router) {}

  ngOnInit(){

  }
  createUser(){
    this.userservice.create(this.value).subscribe(data=>{this.response=data});
    console.log("Creation successfull")
    
    this.router.navigate(['/admin']); 
  }
}
