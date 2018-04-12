//
// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
// import {Observable} from "rxjs/observable";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(){
//
//   }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const authReq = req.clone({
//       // headers: req.headers.set('Authorization', 'Basic' + btoa("miniproject:Pr!nt123") )
//       headers: req.headers.set('Authorization', 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM')
//
//     });
//     return next.handle(req);
//   }
// }


import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = 'bWluaXByb2plY3Q6UHIhbnQxMjM=';
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    return next.handle(authReq);
  }
}

//
// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
// import {Observable} from "rxjs/Observable";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(){
//
//   }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const authReq = req.clone({
//         setHeaders: {
//           Authorization: `Basic bWluaXByb2plY3Q6UHIhbnQxMjM=`
//         }
//       });
//     return next.handle(req);
//   }
// }
