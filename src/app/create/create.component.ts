import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addUser: any;


  constructor(private router:Router,private http:HttpClient,private userservice:UserService) { }

  ngOnInit() {
  }
  // create(addUser:NgForm){
  //   this.userservice.addUser(addUser.value).subscribe();
  //   this.router.navigate(['/admin']);
  // }

}
