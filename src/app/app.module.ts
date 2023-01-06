import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './errorPage/errorPage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [													
    AppComponent,
      LoginComponent,
      AboutComponent,
      AdminComponent,
      HeaderComponent,
      ErrorPageComponent,
      HomeComponent,
      FooterComponent,
      DashBoardComponent,
      UpdateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
