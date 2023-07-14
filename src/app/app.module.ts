import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import {FormsModule} from "@angular/forms";
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerRegisterComponent,
    CustomerUpdateComponent,
    WelcomeComponent,
    CustomerLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
