import {Component, Input,OnInit} from '@angular/core';
import {Customer} from "../interface/customer";
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent {
  customerupdatemodel: Customer={};
  customerId: number|undefined

  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.customerId = this.customerService.customerId;
  }
  onUpdateUser(customerupdatemodel: Customer){
    console.log(this.customerId)
    this.customerService.updateUser(this.customerId,customerupdatemodel).subscribe(
      (response) => {
        this.router.navigate(['customer/'+this.customerId]);
      },
      (error: any) => console.log(error)
    );
  }
  onFileSelected(event: any) {
    this.customerService.uploadPic(event);
  }
}
