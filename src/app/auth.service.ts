import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Users } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  url: string = "http://localhost:3000/details";
  user: Users[] = [];

  public loginForm: FormGroup | any;

  constructor(private router: Router, private http: HttpClient) { }

  login(name: string, password: string): Observable<boolean> {

    return of(false);
  }
}
