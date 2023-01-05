import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:Users[]=[];
  user: any;
  constructor(private userservice:UserService,private http:HttpClient,private router:Router) {}

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

  UpdateUser(id: any){
    this.router.navigate(['/update',id]);
  }
}
