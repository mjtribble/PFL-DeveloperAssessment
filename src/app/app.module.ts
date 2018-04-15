import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.service';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ProductsComponent,
    MessagesComponent,
    CustomerComponent
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
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
