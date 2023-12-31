import {Component} from "@angular/core";
import {Customer} from "../interface/customer";
import {CustomersService} from "../service/customers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  customermodel: Customer={};
  customerupdatemodel: Customer={};
  // @ts-ignore
  id = parseInt(localStorage.getItem("customerId"));
  imageUrl: string = '';

  constructor(private customerService: CustomersService,private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void{
    this.onGetUser();
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


  protected readonly open = open;
}

