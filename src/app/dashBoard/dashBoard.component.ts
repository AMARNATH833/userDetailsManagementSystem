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
  providers: [AuthService]
})
export class DashBoardComponent implements OnInit {

  mug: Users[] = [];
  count: any;
  showFiller = false;

  nameValue = localStorage.getItem('name');
  passwordValue = localStorage.getItem('password');

  constructor(private auth: AuthService, private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUserDetails().subscribe(response => { this.mug = response })
  }
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