import { Component } from '@angular/core';
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../interface/customer";

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
      (response) => {
        localStorage.setItem('customerRole', String(response));
        this.router.navigate(['customers']);
      },
      (error: any) => console.log(error),
      () => console.log('Loggged In')
    );
  }

}
