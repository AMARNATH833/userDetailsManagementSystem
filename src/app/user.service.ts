import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
 httpOptions={
  headers:this.headers
 }
constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/details";

  getDetails(){
    return this.http.get<Users[]>(this.url);
  }
  deleteUser(id:Number):Observable<Users>{
    const url=`${this.url}/${id}`;
    return this.http.delete<Users>(url,this.httpOptions);
  }
  getUpdateUser(id:Number):Observable<Users>{
    const url=`${this.url}/${id}`;
    return this.http.get<Users>(url,this.httpOptions);
  }
  UpdateUser(user:Users):Observable<Users>{
    const url=`${this.url}/${user.id}`;
    return this.http.put<Users>(url,this.httpOptions).pipe(map(()=>user))
  }
}