import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Customer} from "../interface/customer";
import {Loginmodel} from "../interface/loginmodel";
import {environment} from "../environments/environments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private customerId = new BehaviorSubject<string>('');
  private customerRole = new BehaviorSubject<string>('');
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  get customerId$() {
    return this.customerId.asObservable();
  }

  get customerRole$() {
    return this.customerRole.asObservable();
  }

  login(customermodel: Customer) {
    this.http.post<Loginmodel>(this.apiUrl+'/login', customermodel).subscribe(
      (response: Loginmodel) => {
        localStorage.setItem('customerRole',response.role);
        localStorage.setItem('customerId',String(response.id));
        this.customerId.next(String(response.id));
        this.customerRole.next(response.role);

      },
      (error: any) => console.log(error),
      () => console.log('Logged In')
    );
  }

  logout() {
    this.customerId.next('');
    this.customerRole.next('');
    localStorage.removeItem('customerRole');
    localStorage.removeItem('customerId');
  }
}
