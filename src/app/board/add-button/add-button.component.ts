import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  // custom event
  @Output( ) addButtonClick = new EventEmitter();

  onClick(event) {
    this.addButtonClick.emit(null);
  }
  
}
