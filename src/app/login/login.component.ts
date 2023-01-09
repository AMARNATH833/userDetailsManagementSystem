import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { name,password } from '../verify.validation';
import { AuthService } from '../auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
[x: string]: any;
  isSubmitted:boolean=false;
  isValidUser:boolean=false;
  
  public loginForm:FormGroup|any;
  
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private auth:AuthService) { }
  ngOnInit() {
    this.loginForm=this.fb.group({
      name:['',name],
      password:['',password]
    })
  }
 
  Login(){
    this.auth.login(this.loginForm.value.name , this.loginForm.value.password).subscribe(()=>{
      if(this.loginForm.value.name == "Admin" && this.loginForm.value.password == "Adminlogg"){
        this.router.navigate(['admin']);
        // console.log(data)
      }
      else{
        // this.router.navigate(['about']);
          this.http.get<any>("http://localhost:3000/details")
        .subscribe(res=>{
          const user=res.find((data:any)=>{
            return data.name === this.loginForm.value.name && data.password === this.loginForm.value.password});
          if(user){
            // alert("Login sucess");
            this.loginForm.reset();
            this.auth.loggedIn=true;
            this.router.navigate(['dashboard'])
          }else{
            alert("user not found");
          }
        },err=>{
          alert("Something went wrong");
        })
      }
      // this.isSubmitted=false;
      // this.isValidUser=true;
    })
  }
}




  // {
  //   if(this.loginForm.value.name == "admin" && this.loginForm.value.password == 'Admin@123'){
  //     alert("login Sucessfull");
  //     this.loginForm.reset();
  //     this.router.navigate(['admin']);
  //   }

    // else{
    //   this.http.get<any>("http://localhost:3000/details")
    // .subscribe(res=>{
    //   const user=res.find((data:any)=>{
    //     return data.name === this.loginForm.value.name && data.password === this.loginForm.value.password 
    //   });
    //   if(user){
    //     alert("Login sucess");
    //     this.loginForm.reset();
    //     this.router.navigate(['dashboard'])
    //   }else{
    //     alert("user not found");
    //   }
    // },err=>{
    //   alert("Something went wrong");
    // })
    // }