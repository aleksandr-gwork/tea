import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../../core/http.service";
import {TeaItem} from "../../../../types/tea-item.type";
import {CartService} from "../../../core/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private activatedRoute: ActivatedRoute;

  @Output() data: TeaItem | undefined;

  constructor(private httpService: HttpService, activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParamMap.get('id');
    const tea = this.activatedRoute.snapshot.queryParamMap.get('tea');
    if (id && tea) {
      this.httpService.fetchData().subscribe((items: TeaItem[]) => {
        const selectedTea = items.find((item: TeaItem) => item.id === Number(id));
        if (selectedTea) {
          this.data = selectedTea;
          this.cartService.setProductInfo(selectedTea.id, selectedTea.title);
        }
      });
    }

  }




}
