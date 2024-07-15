import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "./cart.service";
import {HttpService} from "./http.service";
import {SearchService} from "./search.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CartService,
    HttpService,
    SearchService
  ]
})
export class CoreModule { }
