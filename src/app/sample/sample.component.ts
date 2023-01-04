import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent{
  public url='http://localhost:3000/details';
  member:any;
  constructor(private userservice:UserService,private http:HttpClient) {
    this.userservice.getDetails().subscribe(data=>{this.member=data})
   }

  ngOnInit(){}

  update(){

  }
  remove(id:Number){
    this.http.delete(`${this.url}/delete/${id}`)
  }
}