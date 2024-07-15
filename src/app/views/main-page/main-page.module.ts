import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPageRoutingModule} from './main-page-routing.module';
import {MainPageComponent} from "./main-page.component";
import {ModalService} from "../../core/modal.service";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
  ],
  providers: [
    ModalService
  ],
})
export class MainPageModule {
}
