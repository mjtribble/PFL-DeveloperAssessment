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


//   {
//     "partnerOrderReference": "MyReferenceNumber",
//     "orderCustomer": {
//         "firstName": "John",
//         "lastName": "Doe",
//         "companyName": "ACME",
//         "address1": "1 Acme Way",
//         "address2": "",
//         "city": "Livingston",
//         "state": "MT",
//         "postalCode": "59047",
//         "countryCode": "US",
//         "email": "jdoe@acme.com",
//         "phone": "1234567890"
//     },
//     "items": [
//         {
//             "itemSequenceNumber": 1,
//             "productID": 1234,
//             "quantity": 1000,
//             "productionDays": 4,
//             "partnerItemReference": "MyItemReferenceID",
//             "itemFile": "http://www.yourdomain.com/files/printReadyArtwork1.pdf"
//         }
//     ],
//     "shipments": [
//         {
//             "shipmentSequenceNumber": 1,
//             "firstName": "John",
//             "lastName": "Doe",
//             "companyName": "ACME",
//             "address1": "1 Acme Way",
//             "address2": "",
//             "city": "Livingston",
//             "state": "MT",
//             "postalCode": "59047",
//             "countryCode": "US",
//             "phone": "1234567890",
//             "shippingMethod": "FDXG",
//             "IMBSerialNumber":"004543450"
//         }
//     ],
//     "payments":[
//         {
//             "paymentMethod": "methodname",
//             "paymentID": "methodid",
//             "paymentAmount": 3.00
//         }
//     ],
//     "itemShipments":[
//         {
//             "itemSequenceNumber": 1,
//             "shipmentSequenceNumber":1
//         }
//     ],
//     "webhooks":[
//         {
//             "type":"status",
//             "callbackUri": "https://www.pfl.com/callback",
//             "callbackHeaders": {
//                 "header_field_sample1": "header_value_sample1",
//                 "header_field_sample2": "header_value_sample2"
//             }
//         }
//     ],
//     "billingVariables":[
//         {
//             "key":   "BillingVariable1Name",
//             "value": "BillingVariable1Value"
//         },
//         {
//             "key":   "BillingVariable2Name",
//             "value": "BillingVariable2Value"
//         }
//     ]
// }

  constructor(
    private route: ActivatedRoute,
    private orderService : OrderService,
    private location: Location
  ) { }


  submit():void{

    this.payload =
    {
        orderNumber: 87,
        partnerOrderReference: 'MyReferenceNumber',
        orderCustomer: this.customer,
        items: this.orderItems
    };

    this.orderService.postOrder(this.payload)
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
    this.orderItems = [$event];
  }

  get diagnostic1() { return JSON.stringify(this.customer) }
  get diagnostic2() { return JSON.stringify(this.orderItems) }

}
