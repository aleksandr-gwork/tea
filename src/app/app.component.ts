import {Component} from '@angular/core';
import {SearchService} from "./services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query = ''; // переменная для хранения значения в поле поиска

  constructor(private searchService: SearchService, private router: Router) {
  }

  search() {
    this.searchService.setSearch(this.query); // -> установка поискового запроса
    this.router.navigate(['/catalog']); // переход на страницу каталога
  }

  clearSearch() {
    this.searchService.clearSearch(); // -> очистка поискового запроса
    this.query = ''; // очищаем поле поиска
  }
}
