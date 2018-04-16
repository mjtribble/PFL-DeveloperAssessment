import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderItemData, ProductDetail, OrderTemplateData } from '../data';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-order-item-form',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})

export class OrderItemComponent implements OnInit, AfterViewInit {

  @Input() productItem : ProductDetail;

  id = +this.route.snapshot.paramMap.get('id');

  item: OrderItemData =
  {
    itemSequenceNumber: 1,
    productID: 1234,
    quantity: 1000,
    itemFile: "http://www.yourdomain.com/files/printReadyArtwork1.pdf",
    templateData: [],
    itemID: this.id
  };

  @Output() saveEvent = new EventEmitter<OrderItemData>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }


  ngAfterViewInit():void {
    // if(this.productItem.hasTemplate){
    //   this.addTemplateData();
    // }
  }

  getProduct(): void {
    this.productService.getProduct(this.id)
      .subscribe(data => this.productItem = data);
  }

  onSubmit() {
    this.saveEvent.emit(this.item);
  }

  addTemplateData(): void {
    console.log(this.productItem.templateFields)
    // for (var field of this.productItem.templateFields) {
    //   let name = field.fieldname;
    //   let value = '';
    //   let template = new OrderTemplateData(name, value);
    //   this.item.templateData.push(template);
    // }
  }

  // TODO: Remove when finished
  get diagnostic() { return JSON.stringify(this.item); }

}
