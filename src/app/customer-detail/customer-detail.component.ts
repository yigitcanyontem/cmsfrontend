import { Component } from '@angular/core';
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../interface/customer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  customermodel: Customer={};
  customerupdatemodel: Customer={};
  id: number | undefined
  imageUrl: string = '';

  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router) {
  }
  ngOnInit(): void{
    this.route.params.subscribe(
      params => {
         this.id = +params['id'];
        this.onGetUser();
        this.customerService.customerId = this.id;
      }
    );
    this.getImage();

  }

  onGetUser(): void{
    this.customerService.getCustomer(this.id).subscribe(
      (response) => this.customermodel = (response),
      (error: any) => console.log(error),
      () => console.log(this.customermodel)
    );
  }
  getImage() {
    this.customerService.getImageUrl(this.id)
      .subscribe(
        response => {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.imageUrl = reader.result as string;
          };
          reader.readAsDataURL(response);
          console.log(response);
        },
        error => {
          console.log(error); // Handle any errors
        }
      );
  }

  onDeleteUser(){
    this.customerService.deleteUser(this.id).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
    this.router.navigate(['customers']);
  }


  protected readonly open = open;
}

