import { Component, Output, EventEmitter } from '@angular/core';

import { OrderItemData } from '../data';

@Component({
  selector: 'app-order-item-form',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})

export class OrderItemComponent implements OnInit {

  item: OrderItemData =
  {
    itemSequenceNumber: 0,
    productID: 0,
    quantity: 0,
    itemFile: '',
    templateData: null,
    itemID: 0
  };

  @Output() saveEvent = new EventEmitter<OrderItemData>();

  constructor() { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.saveEvent.emit(this.item);
  }

  // TODO: Remove when finished
  get diagnostic() { return JSON.stringify(this.item); }

}
