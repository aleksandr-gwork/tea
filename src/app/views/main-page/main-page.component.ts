import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

declare var $: any

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  private modalSubscription: Subscription | undefined;
  public openModal$: Observable<void> | undefined;
  private timer: NodeJS.Timeout | undefined;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    $("#accordion").accordion({
      heightStyle: "content",
      header: '> .accordion-item > .accordion-header',
      icons: {"header": "ui-icon-caret-1-e", "activeHeader": "ui-icon-caret-1-s"},
    });

    this.openModal$ = new Observable(() => {
      this.timer = setTimeout(() => {
        $('#teaModal').modal('show');
      }, 10000)
    })

    this.modalSubscription = this.openModal$.subscribe(() => {
      this.router.navigate(['/catalog'])
    })
  }

  ngOnDestroy() {
    this.modalSubscription?.unsubscribe();
    clearTimeout(this.timer);
  }

}
