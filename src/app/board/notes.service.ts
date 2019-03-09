export class NotesService {
    notes : { id : number, text : string }[] = 
    [
      { id : 272, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod nesciunt esse, voluptatem architecto porro." },
      { id : 12, text : "This app is powered by Angular!" },
      { id : 932, text : "Some another note" },
      { id : 3221, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
      { id : 733, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod nesciunt esse." },
      { id : 1337, text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod nesciunt esse, voluptatem architecto porro." }
    ];

    delete( id : number ) {
        var i,
            needle = -1;
        
        // find note
        for( i = this.notes.length; i--; )
          if( this.notes[i].id == id )
            needle = i;
    
        if( needle !== -1 )
            this.notes.splice( needle, 1 );
    
        // save to server
        // ..............
      }

}