import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrderPayload, OrderCustomerData } from '../data';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  orders: OrderPayload[];
  // model = new OrderPayload()

  constructor(
    private route: ActivatedRoute,
    private orderService : OrderService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  submit(order : OrderPayload):void{
    this.orderService.postOrder(order)
      .subscribe(ord => {
        this.orders.push(ord)
      })
  }

  goBack():void{
  this.location.back();
  }

}
