import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompoComponent } from './compo/compo.component';
import { SignnupComponent } from './auth/signnup/signnup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ActivateUserComponent } from './auth/activate-user/activate-user.component';

const routes: Routes = [
  {path: "compo", component: CompoComponent},
  {path: "signup", component: SignnupComponent},
  {path: "signin", component: SigninComponent},
  {path: "activate", component: ActivateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
