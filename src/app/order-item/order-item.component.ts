import { Component, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderItemData, ProductDetail, OrderTemplateData } from '../data';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-order-item-form',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})

export class OrderItemComponent implements OnInit, AfterViewInit {

  productItem : ProductDetail;
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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  // This needs more work, having a Type issue
  ngAfterViewInit():void {
    // if(this.productItem.hasTemplate){
    //   this.addTemplateData();
    // }
  }

  // This sends the OrderItemData to the parent OrderComponent to be saved.
  @Output() saveEvent = new EventEmitter<OrderItemData>();

  onSubmit() {
    this.saveEvent.emit(this.item);
  }

  // This gets a product's detail with the product id
  getProduct(): void {
    this.productService.getProduct(this.id)
      .subscribe(data => this.productItem = data);
  }

  // This needs more work, having a Type issue with this.productItem
  addTemplateData(): void {
    console.log(this.productItem.templateFields)
    // for (var field of this.productItem.templateFields) {
    //   let name = field.fieldname;
    //   let value = '';
    //   let template = new OrderTemplateData(name, value);
    //   this.item.templateData.push(template);
    // }
  }

  // debugging
  get diagnostic() { return JSON.stringify(this.item); }

}
