import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './data';
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
  return this.http.get(this.productsUrl)
    .pipe(
      map(result => result.results.data),
      tap(products => this.log(`fetched products`)),
      catchError(this.handleError('getProducts', []))
    );
  }

  // /** GET hero by id. Return `undefined` when id not found */
  //  getHeroNo404<Data>(id: number): Observable<Hero> {
  //    const url = `${this.heroesUrl}/?id=${id}`;
  //    return this.http.get<Hero[]>(url)
  //      .pipe(
  //        map(heroes => heroes[0]), // returns a {0|1} element array
  //        tap(h => {
  //          const outcome = h ? `fetched` : `did not find`;
  //          this.log(`${outcome} hero id=${id}`);
  //        }),
  //        catchError(this.handleError<Hero>(`getHero id=${id}`))
  //      );
  //  }
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
