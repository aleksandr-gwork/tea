import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  { path: 'catalog', title: 'Каталог', component: CatalogComponent },
  { path: 'catalog/product', title: 'Чай', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
