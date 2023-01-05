import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  member: any;

  constructor(public route:ActivatedRoute,public router:Router,public userservice:UserService) { }
  value:any;
  users:Users[]=[];
  
  ngOnInit() {
    let sub=this.route.params.subscribe(paras=>{
      this.value=paras['id'];
    });
    console.log(this.value);
    this.userservice.getUpdateUser(this.value).subscribe(data=>{this.member=data})
  }
  update(){
    this.userservice.UpdateUser(this.member).subscribe(data=>{});
    this.router.navigate(['admin']);
  }

}
