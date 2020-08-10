import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel, CustomerType } from '../models/customer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public GetCustomers(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(`${environment.apiUrl}customer`);
  }

  public GetCustomer(customerId: number): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(`${environment.apiUrl}customer/${customerId}`);
  }

  public CreateCustomer(customer: CustomerModel): Promise<object> {
    return this.httpClient.post(`${environment.apiUrl}customer`, customer).toPromise();
  }

  public GetCustomerTypes(): {key: string, value: string}[] {
    const type = CustomerType;
    //return Object.keys(type).map(k => { return { key: type[k] }; });

    const IsNumber = value => isNaN(Number(value)) === false;
    return Object.keys(type)
      .filter(IsNumber)
      .map(key => { return { key: key, value:type[key] } });
  }
}
