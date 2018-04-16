import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Product, ProductDetail, HttpData, HttpDataList } from './data';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  private productsUrl = 'https://testapi.pfl.com/products?apikey=136085'; //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET products from the server */
  getProducts (): Observable<Product[]> {
  return this.http.get<HttpDataList>(this.productsUrl)
    .pipe(
      map(result => result.results.data ),
      tap(products => this.log(`fetched products`)),
      catchError(this.handleError('getProducts', []))
    );
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: number): Observable<any> {
  const url = `https://testapi.pfl.com/products/${id}?apikey=136085`;
  return this.http.get<HttpData>(url)
    .pipe(
      map(result => result.results.data),
      // map(result => console.log(result.results.data)),
      tap( result => this.log(`fetched product id=${result.id}`)),
      catchError(this.handleError(`getproduct id=${id}`))
  );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> =>{

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ProductService message with the MessageService */
  private log(message: string){
    this.messageService.add('ProductService: ' + message );
  }
}
