import {Component, OnInit} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {

      $("#accordion").accordion({
        heightStyle: "content",
        header: '> .accordion-item > .accordion-header',
        icons: { "header": "ui-icon-caret-1-e", "activeHeader": "ui-icon-caret-1-s" },
      });

      // form
      $('#submitBtn').on('click', function () {
        // Получаем значения полей
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let phone = $('#phone').val();
        let country = $('#country').val();
        let index = $('#index').val();
        let address = $('#address').val();

        // Проверяем, все ли поля заполнены
        if (!firstName || !lastName || !phone || !country || !index || !address) {
          alert('Пожалуйста, заполните все поля');
          return;
        }

        if (!/^\+7(\d{10})$/.test(phone)) {
          alert('Пожалуйста, введите корректный  номер телефона в формате +7XXXXXXXXXX');
          return;
        }

        // Проверяем, что в поле индекс введены только цифры
        if (!/^\d+$/.test(index)) {
          alert('В поле индекса могут быть только цифры');
          return;
        }

        // Проверяем, что индекс содержит 6 символов
        if (index.length !== 6) {
          alert('Индекс должен состоять из 6 цифр');
          return;
        }

        // Если все условия выполнены, скрываем форму и показываем блок благодарности
        $('#form').fadeOut();
        $('#thanksBlock').removeClass("d-none");
        $('#form')[0].reset();
        setTimeout(function () {
          $('#form').fadeIn();
          $('#thanksBlock').addClass("d-none");
        }, 4000);
      });
  }



}
