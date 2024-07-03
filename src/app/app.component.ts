import {Component} from '@angular/core';
import {SearchService} from "./services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query = '';

  constructor(private searchService: SearchService, private router: Router) {
  }

  search() {
    this.searchService.setSearch(this.query);
    this.router.navigate(['/catalog']);
  }

  clearSearch() {
    this.searchService.clearSearch();
    this.query = '';
  }
}
