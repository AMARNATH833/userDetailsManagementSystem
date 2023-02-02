import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css'],
  providers: [AuthService]
})
export class DashBoardComponent implements OnInit {

  mug: Users[] = [];
  showFiller = false;

  nameValue = localStorage.getItem('name');
  passwordValue = localStorage.getItem('password');

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
   const hello= this.userservice.getUserDetails().subscribe(response => {this.mug = response})
  }

  // getUsers() {
  //   this.userservice.getDetails().subscribe((response) => { this.mug = response; })
  // }

  update(id: Number) {
    this.router.navigate(['/update', id])
  }

  logout() {
    this.userservice.loggedIn = false;
    localStorage.removeItem('password')
    localStorage.removeItem('username')
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}