import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  detail:any;
  values: any;
  // answer:Array<Data>=[];

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.detail=this.authService.getDetails().subscribe(data=>{this.detail=data;});
  }
  

}
