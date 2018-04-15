import { Component, Input } from '@angular/core';

import { OrderCustomerData } from '../data';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent{
  model : OrderCustomerData;

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() {return JSON.stringify(this.model);}
}
