import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../shared/models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent {
  @Input() customer: Customer = new Customer();
  @Output() customerChange: EventEmitter<Customer> =
    new EventEmitter<Customer>();

  constructor() {}

  update() {
    this.customerChange.emit(this.customer);
  }
}
