import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
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
  image: string | ArrayBuffer |any;
  

  constructor(private http:HttpClient, public route: ActivatedRoute, public router: Router, public userservice: UserService) { }
  value: any;
  users: Users[] = [];
  user!: UserFetch;
  
  public selectedFile: any;
  public event1:any;
  imgURL:any;
  receivedImageData:any;
  base64Data:any;
  convertedImage:any;

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

  public onFileChanged(event:any){
    console.log(event);
    this.selectedFile=event.target.files[0];

    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event2)=>{
      this.imgURL=reader.result;
    };
  }

  onUpload(){
    const uploadData=new FormData();
    uploadData.append('myFile',this.selectedFile,this.selectedFile.name);


    this.http.post('http://localhost:3000/details',uploadData)
      .subscribe(
        res=>{console.log(res);
              this.receivedImageData=res;
              this.base64Data=this.receivedImageData.pic;
              this.convertedImage='data"image/jpeg;base64,'+this.base64Data;},
        err=>console.log('Error occured during Upload: '+err)
      );
  }

}