import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  orderSent = false;
  errorMessage = false;
  disableButton = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {

    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z]*')]],
      last_name: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z]*')]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]],
      country: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z0-9\\s\\-\\/]*')]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      address: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z0-9\\s\\-\\/]*')]],
      product: [{value: this.cartService.getProductTitle(), disabled: true}],
      comment: ['']
    });
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.getRawValue();
      this.disableButton = true;
      this.http.post<any>('https://testologia.ru/order-tea', orderData).subscribe(
        response => {
          if (response.success === 1) {
            this.orderSent = true;
            setTimeout(() => {
              this.orderForm.reset();
              this.router.navigate(['/']);
            }, 3000);
          } else if (response.success === 0) {
            this.errorMessage = true;
            setTimeout(() => {
              this.errorMessage = false;
            }, 3000);
          }
        }
      );
    } else {
      this.orderForm.markAllAsTouched();
    }
    this.disableButton = false;
  }

}
