import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { FeaturesComponent } from './Home/features/features.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'aboutus', component : AboutUsComponent},
  {path : 'features', component: FeaturesComponent},
  {path : 'contactus', component : ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
