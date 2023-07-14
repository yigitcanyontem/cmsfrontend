import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerRoleGuard implements CanActivate{

  constructor(private router: Router) {}

  canActivate(): boolean {
    const customerRole = localStorage.getItem("customerRole")

    if (customerRole === 'CUSTOMER') {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

}
