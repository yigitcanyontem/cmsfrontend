import { Component } from '@angular/core';
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../interface/customer";
import {Loginmodel} from "../interface/loginmodel";



@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  customerloginform: Customer={};
  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router) {
  }
  onLogin(customerloginform: Customer) {
    this.customerService.login(customerloginform).subscribe(
      (response: Loginmodel) => {
        localStorage.setItem('customerId', String(response.id));
        localStorage.setItem('customerRole', response.role);
        this.router.navigate(['home']);

      },
      (error: any) => console.log(error),
      () => console.log('Logged In')
    );
  }



}
