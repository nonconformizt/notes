import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isOpen : boolean =  false;
  title : string = "Delete this item?";
  message : string = "Are you sure you want to remove this note permanently?";
}
