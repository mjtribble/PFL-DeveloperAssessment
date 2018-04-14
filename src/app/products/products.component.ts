import { Component, OnInit } from '@angular/core';

import {IProduct } from '../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor() { }

  ngOnInit() {
    // this.productsObservable = this.getProducts();
  }
  //
  // getProducts(listPath): Obsesrvable<any[]>{
  //   return this.db.list(listPath).valueChanges();
  // }
}
