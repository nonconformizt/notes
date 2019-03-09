import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isOpen: boolean = false;
  title : string = "Delete this item?";
  message : string = "Are you sure you want to remove this note permanently?";

  constructor( private controller : ModalService ) {
    this.controller.request.subscribe(($event) => {
      this.title = $event.title;
      this.message = $event.message;
      this.isOpen = true;
    });
  }

  onYes() {
    this.controller.respond(true);
    this.isOpen = false;
  }

  onNo() {
    this.controller.respond(false);
    this.isOpen = false;
  }
  
}
