import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { IProduct } from './interfaces';
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
  getProducts (): Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this.productsUrl)
    .pipe(
      tap(products => this.log(`fetched products`)),
      catchError(this.handleError('getProducts', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> =>{
      //// TODO: send the error to remotelogging infrastructure
      console.error(error); //log to console instead

      //// TODO: better job of transforming error for user consumption
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
