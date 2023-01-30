import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../user';
import { UserService } from '../user.service';
import { UserFetch } from '../userFetch';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  member: any;
  url="./assets/home.png";

  constructor(public route: ActivatedRoute, public router: Router, public userservice: UserService) { }
  value: any;
  users: Users[] = [];
  user!: UserFetch;

  ngOnInit() {
    let sub = this.route.params.subscribe(paras => {
      this.value = paras['id'];
    });
    this.userservice.getUpdateUser(this.value).subscribe(data => { this.user = data })
  }
  update() {
    this.userservice.UpdateUser(this.user).subscribe(data => { });
    this.getUsers();
    this.userservice.loggedIn = false;
    this.router.navigate(['/login']);
  }
  getUsers() {
    this.userservice.getDetails().subscribe((response) => { this.users = response; })
  }
  
  onselectFile(e:any){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.res
      }
    }
  }

}