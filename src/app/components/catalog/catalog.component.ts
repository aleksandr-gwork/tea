import {Component, Input, OnInit} from '@angular/core';
import {TeaItem} from "../../types/tea-item.type";
import {HttpService} from "../../services/http.service";
import {SearchService} from "../../services/search.service";


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
      this.header = query ? `Результаты поиска: "${query}"` : 'Наши чайные коллекции';

      this.httpService.fetchData(query).subscribe((data) => {
        if (!data.length ) {
          this.header = 'Ничего не найдено';
        }
        this.data = data.filter(item => {
          return item.title.toLowerCase().includes(query.toLowerCase());
        });
      })
    })
  }
}

