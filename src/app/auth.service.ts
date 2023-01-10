import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:boolean=false;

  public loginForm:FormGroup|any;
  constructor(private router:Router,private http:HttpClient) { }

  login(name:string,password:string):Observable<boolean>{
    
    if(name === 'admin' && password === 'Admin@123'){
      this.loggedIn=true;
      return of(true);
    }
    


    // else{
    //   this.http.get<any>("http://localhost:3000/details")
    //   .subscribe(res=>{
    //     const user=res.find((data:any)=>{
    //       return data.name === this.loginForm.value.name && data.password === this.loginForm.value.password
    //     });
    //     if(user){
    //       alert("login success");
    //       this.loginForm.reset();
    //       this.router.navigate(['dashboard'])
    //     }
    //     else{
    //       alert("user not found");
    //     }
    //   },err=>{
    //     alert("Something Went Wrong");
    //   })
    // }


    return of(false);
  }
}
