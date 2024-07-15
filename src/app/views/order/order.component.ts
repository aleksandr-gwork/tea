import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  title: string | null | undefined;
  orderForm!: FormGroup; // объявляем FormGroup
  orderSent = false; // переменная для отображения сообщения об успешной отправке
  errorMessage = false; // переменная для отображения сообщения об ошибке
  disableButton = false; // переменная для отключения кнопки "Заказать"

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.queryParamMap.get('tea');
    if (!this.title) {
      this.router.navigate(['/']);
    }

    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z]*')]],
      last_name: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z]*')]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]],
      country: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z0-9\\s\\-\\/]*')]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      address: ['', [Validators.required, Validators.pattern('[а-яА-Яa-zA-Z0-9\\s\\-\\/]*')]],
      product: [{value: this.title, disabled: true}],
      comment: ['']
    });
  }

  submitOrder() {
    if (this.orderForm.valid) { // если форма валидна
      const orderData = this.orderForm.getRawValue(); // получаем данные из формы
      this.disableButton = true; // отключаем кнопку "Заказать"
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
