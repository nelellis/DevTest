import { Component, OnInit, Type } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { EngineerService } from "../services/engineer.service";
import { CustomerService } from "../services/customer.service";
import { CustomerModel, CustomerType } from "../models/customer.model";
import { Observable } from 'rxjs';

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit {
  public customers: Observable<CustomerModel[]>;
  public addCustomerForm: FormGroup;
  public newCustomer: CustomerModel = {
    customerId: null,
    name: null,
    type: undefined,
  };
  public customerTypes: { key: string, value: string }[] = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadCustomers();
    this.customerTypes = this.customerService.GetCustomerTypes();
  }

  private loadCustomers() {
    this.customers = this.customerService.GetCustomers();
    
  }

  public createCustomer(customerForm: NgForm): void {
    if (customerForm.invalid) {
      alert("form is not valid");
    } else {
      this.customerService.CreateCustomer(this.newCustomer).then(() => this.loadCustomers());
    }
  }
}
