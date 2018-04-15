import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
// import { ProductDetailsComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: ProductDetailsComponent },
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
