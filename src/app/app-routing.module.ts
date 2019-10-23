import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { LoginComponent } from './Home/login/login.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';

const routes: Routes = [
  {path : '', component : WelcomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'aboutus', component : AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
