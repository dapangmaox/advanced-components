import { Component } from '@angular/core';
import { customers } from 'src/app/shared/constants/customer.constants';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  selectedCustomer: Customer = new Customer();

  customers = customers;

  constructor() {}
}
