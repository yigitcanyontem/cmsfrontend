import { Component } from '@angular/core';
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../interface/customer";
import {Loginmodel} from "../interface/loginmodel";
import {AuthenticationService} from "../service/authentication.service";



@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  customerloginform: Customer={};
  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router, private authService: AuthenticationService) {
  }
  onLogin(customerloginform: Customer) {
    this.authService.login(customerloginform);
    this.router.navigate(['home']);
  }



}
