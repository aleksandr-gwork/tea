import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  id: number | undefined;
  title: string | undefined;

  constructor() { }

  setProductInfo(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  getProductInfo() {
    return {
      id: this.id,
      title: this.title
    }
  }
}
