import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './create/create.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { ErrorPageComponent } from './errorPage/errorPage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'about', title: 'About', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', title: 'DashBoard', component: DashBoardComponent, canActivate: [AuthGuard] },
  { path: 'admin', title: 'AdminPage', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', title: 'UPDATE', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: 'create', title: 'CREATE', component: CreateComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', title: 'PAGENOTFOUND', component: ErrorPageComponent }
];
// 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }