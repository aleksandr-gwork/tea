import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './components/catalog/catalog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OrderComponent } from './components/order/order.component';
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    component: MainPageComponent
  },
  {
    path: 'catalog',
    title: 'Каталог',
    component: CatalogComponent
  },
  {
    path: 'order',
    title: 'Оформление заказа',
    component: OrderComponent
  },
  {
    path: 'catalog/product/:id',
    title: 'Чай',
    component: ProductComponent
  },
  {
    path: '**',
    title: 'Главная',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
