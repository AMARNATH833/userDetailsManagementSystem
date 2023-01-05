import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private Authguardservice:AuthServiceService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean|Promise<boolean>{  
    var isAuthenticated=this.Authguardservice.getAuthStatus(); 
    if(!isAuthenticated){
      this.router.navigate(['login']);
    }
    return isAuthenticated;
}
  
}
