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
  orders: OrderItemData[];
  customer: OrderCustomerData;
  payload: OrderPayload;

  constructor(
    private route: ActivatedRoute,
    private orderService : OrderService,
    private location: Location
  ) { }


  submit(order : OrderPayload):void{
    this.orderService.postOrder(order)
      .subscribe(ord => {
        this.orders.push(ord);
      })
  }

  goBack():void{
    this.location.back();
  }

  saveCustomer($event) {
    this.customer = $event;
  }

  saveItem($event) {
    this.orders = [$event];
  }

  get diagnostic1() { return JSON.stringify(this.customer) }
  get diagnostic2() { return JSON.stringify(this.orders) }

}
