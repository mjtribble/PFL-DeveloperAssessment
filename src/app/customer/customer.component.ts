import { Component, Output, EventEmitter } from '@angular/core';

import { OrderCustomerData } from '../data';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

  customer: OrderCustomerData =
  {
    id: 0,
    firstName: '',
    lastName: '',
    companyName: '',
    address1: '',
    city: '',
    state: '',
    postalCode: 0,
    countryCode: '',
    email: '',
    phone: ''
  };

  @Output() saveEvent = new EventEmitter<OrderCustomerData>();

  constructor(){}

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.saveEvent.emit(this.customer);
  }

  // TODO: Remove when finished
  get diagnostic() { return JSON.stringify(this.customer); }
}
