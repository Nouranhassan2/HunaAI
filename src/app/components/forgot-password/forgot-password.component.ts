import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {} // Inject Router

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.authService.forgotPassword(this.forgotPasswordForm.value.email as string).subscribe({
        next: (data) => {
          console.log(data);
          const token = data.token; // Assume the token is returned in the response
          // Navigate to reset password component with token
          this.router.navigate(['/reset-password', token]);
        },
        error: (err) => {
          console.log(err);
          // Handle error response, show an error message to the user
        }
      });
    }
  }
}
