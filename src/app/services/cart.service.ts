import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  title: string | undefined;

  constructor() { }

  setProductTitle(productTitle: string) {
    this.title = productTitle;
  }

  getProductTitle() {
    return this.title;
  }
}
