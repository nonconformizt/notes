import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  title : string;
  newAccount : boolean;

  constructor( private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    if( this.route.snapshot.url[1].path === 'signup' ) {
      this.newAccount = true;
      this.title = 'Sign up';
    } else {
      this.newAccount = false;
      this.title = 'Log in';
    }
  }

  signUp( form : NgForm ) {
    console.warn("Is valid: " + form.valid);
    console.log(form);
    // this.router.navigate(['/']);
  }

  logIn( form : NgForm ) {
    console.warn("Is valid: " + form.valid);
    console.log(form);
    // this.router.navigate(['/']);
  }
}