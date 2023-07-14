import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {CustomerRegisterComponent} from "./customer-register/customer-register.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CustomerLoginComponent} from "./customer-login/customer-login.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/register', component: CustomerRegisterComponent },
  { path: 'customer/:id', component: CustomerDetailComponent, children:[
      { path: 'update', data: {customerId: 'id'},component: CustomerUpdateComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
