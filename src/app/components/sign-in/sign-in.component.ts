import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  clicked: boolean = false;
  LoginForm: FormGroup;

  constructor(private _authS: AuthService) {
    this.LoginForm = new FormGroup({
 
 
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{6,12}$/),
      ]),
    
    
    });
  }

  handleLogin() {
    this.clicked = true;

    if (this.LoginForm.invalid)
      return;

    this._authS.logIn(this.LoginForm.value).subscribe({
      next: (response) => {
        console.log(response);
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }
}

