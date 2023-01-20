import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../user';
import { UserFetch } from '../userFetch';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  users: Users[] = [];
  user!: UserFetch;
  response: any;
  value: any;

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {

  }
  createUser(create: NgForm) {
    this.userservice.create(create.value).subscribe(data => { this.response = data });
    console.log(create.value)
    console.log("Creation successfull")
    this.router.navigate(['/admin']);
  }
}
