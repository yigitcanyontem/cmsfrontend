import { Component } from '@angular/core';
import {Customer} from "../interface/customer";
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent {
  customerupdatemodel: Customer={};

  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router) {
  }

  onUpdateUser(customerupdatemodel: Customer){
    // @ts-ignore
    this.customerService.updateUser(parseInt(localStorage.getItem("customerId")),customerupdatemodel).subscribe(
      (response) => {
        this.router.navigate(['profile']);
      },
      (error: any) => console.log(error),
      () => console.log('Done deleting user')
    );

  }
  onFileSelected(event: any) {
    this.customerService.uploadPicCustomer(event);
  }
}

