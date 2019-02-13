import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignnupComponent } from './auth/signnup/signnup.component';
import { CompoComponent } from './compo/compo.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './auth/shared/user.service';
import { ActivateUserComponent } from './auth/activate-user/activate-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignnupComponent,
    CompoComponent,
    SigninComponent,
    ActivateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
