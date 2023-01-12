import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './user';
import { catchError, map, Observable } from 'rxjs';
import { UserFetch } from './userFetch';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 url:string="http://localhost:3000/details";

 headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
 httpOptions={
  headers: this.headers
 }
 

  constructor(private http:HttpClient) { }
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
  UpdateUser(user:UserFetch):Observable<Users>{
    const url=`${this.url}/${user.id}`;
    return this.http.put<Users>(url,user,this.httpOptions).pipe(map(()=>user))
  }
  
}















  
  
  // update(id,user):Observable<Users>{
  //   return this.http.put<Users>(this.url+''+id,JSON.stringify(Users),this.httpOptions)
  //   .pipe(
  //   )
  // }

  // update(id,users):Observable<Users>{
  //   return this.http.put<Users>(this.url+'/user/'+id,JSON.stringify(users),this.httpOptions)
  //   .pipe(
      
  //   )
  // }

