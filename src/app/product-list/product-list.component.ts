import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.productsObservable = this.getProducts();
  }
  //
  // getProducts(listPath): Obsesrvable<any[]>{
  //   return this.db.list(listPath).valueChanges();
  // }
}
