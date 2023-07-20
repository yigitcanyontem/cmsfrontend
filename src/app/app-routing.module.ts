import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {CustomerRegisterComponent} from "./customer-register/customer-register.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CustomerLoginComponent} from "./customer-login/customer-login.component";
import {CustomerRoleGuard} from "./interface/customer-role.guard";
import {CustomerProfileComponent} from "./customer-profile/customer-profile.component";
import {ProfileUpdateComponent} from "./profile-update/profile-update.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'customers', component: CustomerComponent, canActivate: [CustomerRoleGuard] },
  { path: 'profile', component: CustomerProfileComponent,children:[
      { path: 'update', component: ProfileUpdateComponent},
    ]},
  { path: 'customers/register', component: CustomerRegisterComponent, canActivate: [CustomerRoleGuard]},
  { path: 'customer/:id', component: CustomerDetailComponent,  canActivate: [CustomerRoleGuard] ,children:[
      { path: 'update', data: {customerId: 'id'},component: CustomerUpdateComponent }
    ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
