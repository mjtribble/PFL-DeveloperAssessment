import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrderPayload, OrderCustomerData, OrderItemData } from '../data';
import { CustomerComponent } from '../customer/customer.component';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent{
  orders: OrderPayload[];
  orderItems: OrderItemData[];
  customer: OrderCustomerData;
  payload: OrderPayload;

  constructor(
    private route: ActivatedRoute,
    private orderService : OrderService,
    private location: Location
  ) { }

  // populates the payload and calls the orderService to post the order
  // needs tweeking, not functioning at the moment
  submit():void {
    this.payload = {
        orderNumber: 87,
        partnerOrderReference: 'MyReferenceNumber',
        orderCustomer: this.customer,
        items: this.orderItems
    };

    this.orderService.postOrder(this.payload)
      .subscribe()
  }

  goBack():void{
    this.location.back();
  }

  // saves the OrderCustomerData from the CustomerComponent form
  saveCustomer($event) {
    this.customer = $event;
  }

  // saves the OrderItemData from OrderItemComponent form
  saveItem($event) {
    this.orderItems = [$event];
  }

  // debugging
  get diagnostic1() { return JSON.stringify(this.customer) }
  get diagnostic2() { return JSON.stringify(this.orderItems) }

}
