import { Injectable  } from '@angular/core';
import {map, Observable} from "rxjs";
import {Customer} from "../interface/customer";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environments";


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = environment.apiUrl;
  customerId = 0;
  imageUrl: string = '';
  constructor(private http: HttpClient) {

  }
  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl)
      .pipe(
        map(customers => customers.map(customer =>({
          ...customer,
          id: customer.id
        })))
      );
  }

  uploadPic(event: any){
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file);

    this.http.post<any>(this.apiUrl+`/upload/${this.customerId}`, formData)
      .subscribe(
        response => {
          console.log(response); // Handle the response from the backend
        },
        error => {
          console.log(error); // Handle any errors
        }
      );
  }

  getCustomer(id: number | undefined): Observable<Customer>{
    return this.http.get<Customer>(this.apiUrl+`/id/${id}`);
  }

  createUser(customermodel: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl+'/register', customermodel);
  }
  deleteUser(id: number | undefined): Observable<Customer>{
    return this.http.delete<Customer>(this.apiUrl+`/delete/${id}`);
  }
  updateUser(id: number | undefined,customer: Customer): Observable<Customer>{
    return this.http.patch<Customer>(this.apiUrl+`/update/${id}`, customer);
  }

  getImageUrl(id: number | undefined) {
    return this.http.get(this.apiUrl + '/images/' + id, { responseType: 'blob' });
  }
  login(customermodel: Customer): Observable<String>{
    return this.http.post<String>(this.apiUrl+'/login', customermodel);
  }
}
