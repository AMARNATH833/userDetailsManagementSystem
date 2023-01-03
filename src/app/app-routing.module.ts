import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { ErrorPageComponent } from './errorPage/errorPage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home',title:'Home',component:HomeComponent},
  {path:'login',title:'Login',component:LoginComponent},
  {path:'about',title:'About',component:AboutComponent},
  {path:'dashboard',title:'DashBoard',component:DashBoardComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',title:'PAGENOTFOUND',component:ErrorPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
