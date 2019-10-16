import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { LoginComponent } from './Home/login/login.component';

const routes: Routes = [
  {path : '', component : WelcomeComponent},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
