import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderService } from './order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MessagesComponent,
    CustomerComponent,
    OrderComponent,
    OrderItemComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [
   {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
   },
    ProductService,
    MessageService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
