import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchService} from "../../core/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private searchService: SearchService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  search() {
    let queryValue: string = this.searchForm.get('query')?.value;
    if (queryValue === null || queryValue === '') {
      this.searchService.setSearch(queryValue);
    } else {
      this.searchService.setSearch(queryValue);
    }
    if (this.router.url !== '/catalog') {
      this.router.navigate(['/catalog']); // переход на страницу каталога
    }
  }

  clearSearch() {
    this.searchForm.reset();
    this.searchService.clearSearch(); // -> очистка поискового запроса
  }

}
