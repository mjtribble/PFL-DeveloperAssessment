import { Component, Input } from '@angular/core';

import { OrderCustomerData } from '../data';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent{
  model = new OrderCustomerData(
      1,
      "John",
      "Doe",
      "ACME",
      "1 Acme Way",
      "Livingston",
      "MT",
      59047,
      "US",
      "jdoe@acme.com",
      "1234567890"
  );
  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() {return JSON.stringify(this.model);}
}
