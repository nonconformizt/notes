import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note : { id: number, text : string };
  @Output() delete = new EventEmitter<{ id : string }>();

  onDeleteClick( e : MouseEvent ) {
    console.log( "User wants to delete note with id " + this.note.id);
  }
}
