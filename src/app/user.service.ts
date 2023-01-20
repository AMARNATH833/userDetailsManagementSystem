import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './user';
import { catchError, map, Observable } from 'rxjs';
import { UserFetch } from './userFetch';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  nameValue = localStorage.getItem('username');
  passwordValue = localStorage.getItem('password')

  url: string = "http://localhost:3000/details";
  Userurl: string = "http://localhost:3000/details?password=" + this.passwordValue + "&username=" + this.nameValue;

  loggedIn: boolean = false;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  constructor(private http: HttpClient, private router: Router) { }
  getDetails() {
    return this.http.get<Users[]>(this.url);
  }
  deleteUser(id: Number): Observable<Users> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Users>(url, this.httpOptions);
  }
  getUpdateUser(id: Number): Observable<Users> {
    const url = `${this.url}/${id}`;
    return this.http.get<Users>(url, this.httpOptions);
  }
  UpdateUser(user: UserFetch): Observable<Users> {
    const url = `${this.url}/${user.id}`;
    return this.http.put<Users>(url, user, this.httpOptions).pipe(map(() => user))
  }
  getUserDetails() {
    return this.http.get<Users[]>(this.Userurl);
  }
  create(data: any) {
    return this.http.post(`${this.url}`, data)
  }
}