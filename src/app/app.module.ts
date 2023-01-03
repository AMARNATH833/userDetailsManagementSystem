import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './errorPage/errorPage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { SampleComponent } from './sample/sample.component';
import { ReactiveFormsModule } from '@angular/forms';

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
      SampleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
