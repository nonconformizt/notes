import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note : { id: number, text : string };
  @Output() delete = new EventEmitter<number>();

  editing : boolean = false;

  constructor( private modal : ModalService ) {}

  onDeleteClick() {
    // first ask user
    this.modal.get();

    let sub = this.modal.responce.subscribe((choice : boolean) => {
      if (choice)
        this.delete.emit(this.note.id);
      sub.unsubscribe();
    });

  }

  onEditClick() {
    this.editing = true;
  }


}