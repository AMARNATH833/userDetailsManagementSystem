import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../user';
import { UserService } from '../user.service';
import {AuthService} from '../auth.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title="admin";
  users:Users[]=[];
  user: any;

  public linkURL="http://localhost:3000/details";

  constructor(private userservice:UserService,private http:HttpClient,private router:Router,private auth:AuthService) {}

  ngOnInit() :void{
    this.userservice.getDetails().subscribe(response=>{this.users=response})
  }

  deleteUser(val: Number){
    if(confirm("Are you sure to delete this data ?")){
    this.userservice.deleteUser(val).subscribe(data=>{});
    this.userservice.getDetails().subscribe((response)=>{
      this.users=response;
    });
  }
  }

  // update(user:User):Observable<User>{
  //   const link=`${this.linkURL}/${user.id}`;
  //   return this.http.put<User>(this.linkURL,user,this.httpOptions).pipe(
  //     map(()=>user),
  //     ca
  //   )
  // }  

  UpdateUser(id: any){
    this.router.navigate(['/update',id]);
  }
  logout(){
    // this.router.navigate(['/home']);
    alert("You logged out of the Site");
    this.auth.loggedIn=false;
    this.router.navigate(['/home']);
  }
}