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
    firstName: 'John',
    lastName: 'Doe',
    companyName: 'ACME',
    address1: '1 Acme Way',
    city: 'Livingston',
    state: 'MT',
    postalCode: 59747,
    countryCode: 'US',
    email: 'jdoe@acme.com',
    phone: '1234567890'
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
