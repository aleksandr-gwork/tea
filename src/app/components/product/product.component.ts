import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {TeaItem} from "../../types/tea-item.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public id: string | null | undefined;
  private activatedRoute: ActivatedRoute;

  @Output() data: TeaItem | undefined;

  constructor(private httpService: HttpService, activatedRoute: ActivatedRoute, private cartService: CartService) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.fetchData().subscribe((items: TeaItem[]) => {
      const item = items.find((item: TeaItem) => item.id === Number(this.id));
      if (item) {
        this.data = item;
        this.cartService.setProductTitle(item.title);
      }
    });
  }


}
