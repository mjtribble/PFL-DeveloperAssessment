import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.productsObservable = this.getProducts();
  }
  //
  // getProducts(listPath): Obsesrvable<any[]>{
  //   return this.db.list(listPath).valueChanges();
  // }
}
