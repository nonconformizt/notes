import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: AuthComponent },
  { path: 'auth/signup', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
