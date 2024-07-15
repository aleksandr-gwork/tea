import {Injectable, TemplateRef} from '@angular/core';
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal ) { }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }

}
