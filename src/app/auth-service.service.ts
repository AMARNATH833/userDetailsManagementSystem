import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  getAuthStatus: any;
  

  constructor(private Authguardservice:AuthServiceService,private router:Router) { }

  isLoggedIn(){
    return !!localStorage.getItem("SeesionUser");
  }
  
}
