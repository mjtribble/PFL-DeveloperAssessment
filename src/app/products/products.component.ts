import { Component, OnInit } from '@angular/core';

import {IProduct } from '../interfaces';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void {
    this.productService.getProducts()
    // .subscribe(data => console.log(data));
      .subscribe(products => this.products = products);
  }

  order(): void{
    //// TODO: load order form
  }
}

//   getData(){
//     return this.http.get(this.apiUrl)
//   }
//
//   getOrders(){
//     this.getData().subscribe(data => {
//       console.log(data);
//       this.data = data
//     })
//   }
// }
