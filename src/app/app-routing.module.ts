import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PasswordResetComponent} from "./component/authentication/component/password-reset/password-reset.component";
import {HomePageComponent} from "./core/components/home-page/home-page.component";
import {AuthenticationComponent} from "./component/authentication/authentication.component";

const routes: Routes = [{path: '', component: HomePageComponent},
  { path: 'authentication', loadChildren: () => import('./component/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'home-page', loadChildren: () => import('./core/components/home-page/home-page.module').then(m => m.HomePageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
