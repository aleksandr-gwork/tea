import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ModalService} from "../../core/modal.service";

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

  @ViewChild('modal') modal: any;

  constructor(private router: Router, private modalService: ModalService) {

  }

  ngOnInit(): void {
    $("#accordion").accordion({
      heightStyle: "content",
      header: '> .accordion-item > .accordion-header',
      icons: {"header": "ui-icon-caret-1-e", "activeHeader": "ui-icon-caret-1-s"},
    });

    this.openModal$ = new Observable(() => {
      this.timer = setTimeout(() => {
        this.modalService.open(this.modal);
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

  protected readonly open = open;
}
