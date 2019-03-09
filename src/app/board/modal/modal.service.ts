import { EventEmitter } from '@angular/core';

export class ModalService {
    responce = new EventEmitter<boolean>();
    request = new EventEmitter<{title : string, message : string}>();

    respond( resp : boolean ) {
        this.responce.emit(resp);
    }

    get( title?: string, message?: string ) {
        
        title = title ? title : "Delete this item?";
        message = message ? message : "Are you sure you want to remove this note permanently?";
        
        this.request.emit({title: title, message: message});
    }
}