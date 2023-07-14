import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmsfrontend';
  customerRole: string | null = localStorage.getItem('customerRole');
  customerId: string | null = localStorage.getItem('customerId');
  constructor(private router:Router) {
  }
  logout() {
    localStorage.removeItem('customerRole');
    localStorage.removeItem('customerId');
    this.router.navigate(['home'], {
      skipLocationChange: true,
      queryParamsHandling: 'merge'
    })
  }
}
