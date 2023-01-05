import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { name,password } from '../verify.validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any;
  
  public loginForm:FormGroup|any;
  
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  ngOnInit() {
    this.loginForm=this.fb.group({
      name:['',name],
      password:['',password]
    })
  }
 
  Login(){
    if(this.loginForm.value.name == "admin" && this.loginForm.value.password == 'Admin@123'){
      alert("login Sucessfull");
      this.loginForm.reset();
      this.router.navigate(['admin']);
    }
    else{
      this.http.get<any>("http://localhost:3000/details")
    .subscribe(res=>{
      const user=res.find((data:any)=>{
        return data.name === this.loginForm.value.name && data.password === this.loginForm.value.password 
      });
      if(user){
        alert("Login sucess");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong");
    })
    }
    
  }
}
