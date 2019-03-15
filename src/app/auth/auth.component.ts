import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  title : string = 'Log in'
  newAccount : boolean = false;

  constructor( private router: Router,
               private url: ActivatedRoute ) { }

  switchMode() {
    this.newAccount = !this.newAccount;
    this.title = (this.newAccount) ? 'Sign up' : 'Log in';
  }

  createAccount(e : MouseEvent) {
    console.log('create acc');
    console.log(this.url.snapshot);
    
    // this.router.navigate(['/']);

    e.preventDefault();
  }

  logIn() {
    console.log('log in');
    
    this.router.navigate(['/']);
  }
}