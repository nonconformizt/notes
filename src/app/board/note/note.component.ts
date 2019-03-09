import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note : { id: number, text : string };
  @Output() delete = new EventEmitter<number>();
  @ViewChild('inner') inner : ElementRef;
  // click outside listener
  @HostListener('window:mousedown', ['$event.target']) someClick(target) {    
    if( !this.inner.nativeElement.contains(target) && this.editing ) {
      this.exitEdit();
    }
  }
  // escape button listener
  @HostListener('window:keydown', ['$event']) click(e : KeyboardEvent){
    if( e.key === "Escape" && this.editing )
      this.exitEdit();
  }

  editing : boolean = false;

  constructor( private modal : ModalService,
               private notesService : NotesService) {}

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
    this.inner.nativeElement.setAttribute("contenteditable", true);

    // select all
    var range = document.createRange();
    range.selectNode(this.inner.nativeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }

  exitEdit() {
    var newText = this.inner.nativeElement.innerHTML;
    if( this.note.text !== newText )
      this.notesService.updateText( this.note.id, newText );

    this.editing = false;
    this.inner.nativeElement.setAttribute("contenteditable", false);
    window.getSelection().removeAllRanges();

  }
}