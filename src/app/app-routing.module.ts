import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'order-item/:id', component: OrderComponent },
  { path: 'dashboard', component: AppComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
