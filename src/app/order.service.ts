import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { OrderPayload } from './data'
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OrderService {

  private ordersUrl = 'https://testapi.pfl.com/orders?apikey=136085'; //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

    /** POST: add a new order to the server */
    /** post(url, dataToSave, options) */
    postOrder(order: OrderPayload): Observable<OrderPayload>{
      return this.http.post<OrderPayload>(this.ordersUrl, order).pipe(
        tap((order: OrderPayload) => this.log(`added order w/ order number: ${order.orderNumber}`)),
        catchError(this.handleError<OrderPayload>('submitOrder'))
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

    /** Log an OrderService message with the MessageService */
    private log(message: string){
      this.messageService.add('OrderService: ' + message );
    }

}
