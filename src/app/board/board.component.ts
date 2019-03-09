import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  notes : { id : number, text : string }[] = [];
  columns : { id : number, text : string }[][] = [];
  
  constructor( private notesService: NotesService ) {}
  
  ngOnInit() {
    this.notes = this.notesService.notes;
    this.splitColumns();
  }

  splitColumns() {
    var len = this.notes.length;
    
    // clear columns
    for( let j = 0; j < 4; j++ ) 
      this.columns[j] = [];

    for( let i = 0; i < len; i += 4 )
      for( let j = 0; j < 4 && i + j < len; j++ )
        this.columns[j].push( this.notes[ i + j ] );
  }

  onAddButton() {
    console.log("Add");
  }

  onDelete( id ) {
    console.log("Board onDelete() fired");
    this.notesService.delete(id);
    this.splitColumns();
  }

}