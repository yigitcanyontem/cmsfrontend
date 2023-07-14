import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Loginmodel} from "./interface/loginmodel";
import {CustomersService} from "./service/customers.service";
import {AuthenticationService} from "./service/authentication.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmsfrontend';
  customerRole: string | null = localStorage.getItem('customerRole');
  customerId: string | null = localStorage.getItem('customerId');
  private authSubscription: Subscription;

  constructor(private router:Router,private authService: AuthenticationService) {this.authSubscription = authService.customerId$.subscribe(
    (customerId) => (this.customerId = customerId)
  );

    this.authSubscription = authService.customerRole$.subscribe(
      (role) => (this.customerRole = role)
    );
  }

  ngOnDestroy() {
    // Unsubscribe from the observables to prevent memory leaks
    this.authSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
