import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  notes : { id : number, text : string }[] = 
  [
    { id : 0, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod nesciunt esse, voluptatem architecto porro." },
    { id : 12, text : "This app is powered by Angular!" },
    { id : 932, text : "Some another note" },
    { id : 3221, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { id : 733, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod nesciunt esse." },
    { id : 0, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod nesciunt esse, voluptatem architecto porro." }
  ];
  columns : { id : number, text : string }[][] = [];
  
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

  ngOnInit() {
    this.splitColumns();
  }

}