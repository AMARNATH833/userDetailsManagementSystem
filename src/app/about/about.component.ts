import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  title="About : User Details Management Systems";
  

  constructor(private auth:AuthService,private router:Router) { }

  logout() {
    this.auth.loggedIn=false;
    this.router.navigate(['home']);
    }
}
