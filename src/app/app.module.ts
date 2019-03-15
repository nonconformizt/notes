import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { NoteComponent } from './board/note/note.component';
import { AddButtonComponent } from './board/add-button/add-button.component';
import { ModalComponent } from './board/modal/modal.component';

import { NotesService } from './board/notes.service';
import { ModalService } from './board/modal/modal.service';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    NoteComponent,
    AddButtonComponent,
    ModalComponent,
    AuthComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
