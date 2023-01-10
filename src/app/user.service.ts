import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './user';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 url:string="http://localhost:3000/details";
 httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
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
  UpdateUser(user:Users):Observable<Users>{
    const url=`${this.url}/${user.id}`;
    return this.http.put<Users>(url,this.httpOptions).pipe(map(()=>user))
  }

  // update(id,users):Observable<Users>{
  //   return this.http.put<Users>(this.url + '/details/' +id,JSON.stringify(users),this.httpOptions)
  // }


  // update(id,user):Observable<Users>{
  //   return this.http.put<Users>(this.url ++)
  // }
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

