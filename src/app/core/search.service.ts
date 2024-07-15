import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class SearchService {
  private searchSubject = new BehaviorSubject<string>(''); //  это BehaviorSubject, инициализированный пустой строкой для хранения поискового запроса
  search$: Observable<string> = this.searchSubject.asObservable(); //  это Observable, происходящий от searchSubject для наблюдения за поисковыми запросами

  setSearch(query: string) {
    this.searchSubject.next(query); // устанавливает новый поисковый запрос
  }

  clearSearch() {
    this.searchSubject.next(''); // очищает поисковый запрос, устанавливая его как пустую
  }

}
