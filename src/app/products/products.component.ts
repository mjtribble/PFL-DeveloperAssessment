import { Component, OnInit } from '@angular/core';

import { Product } from '../data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  /** Gets a list of products using the product service */
  getProducts() : void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}
