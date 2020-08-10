import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { CustomerModel, CustomerType } from '../models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  public customer: CustomerModel;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.customerService.GetCustomer(id).subscribe(customer => this.customer = customer);
    });
  }

}
