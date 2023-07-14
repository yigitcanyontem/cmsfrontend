import { Component } from '@angular/core';
import {Customer} from "../interface/customer";
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  customerregistermodel: Customer={};
  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router) {
  }

  onCreateUser(customerregistermodel: Customer){
    this.customerService.createUser(customerregistermodel).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
    this.router.navigate(['customers'])
  }


}
