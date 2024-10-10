import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/index';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.select(fromStore.selectSession).subscribe(session => {
      if (session.login) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onSubmit() {
    const payload = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    console.log(payload)

    this.store.dispatch(fromStore.login());
  }

}
