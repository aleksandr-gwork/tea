import {Component, Input, OnInit} from '@angular/core';
import {TeaItem} from "../../../../types/tea-item.type";
import {HttpService} from "../../../core/http.service";
import {SearchService} from "../../../core/search.service";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  header = 'Наши чайные коллекции';

  @Input() data: TeaItem[] = [];

  constructor(private httpService: HttpService, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.search$.subscribe(query => {
      this.header = query ? `Результаты поиска: "${query}"` : 'Наши чайные коллекции'; // если есть поисковый запрос, то показываем результаты поиска

      this.httpService.fetchData(query).subscribe((item) => {
        if (!item.length ) {
          this.header = `По запросу: "${query}" ничего не найдено`;
          this.data = [];
        } else if (item) {
          this.data = item.filter(tea => tea.title.toLowerCase().match(query.toString().toLowerCase()));

        }
      })
    })
  }

}

