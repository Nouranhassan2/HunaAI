import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

 
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  token: string = '';
  newPassword: string = '';

  constructor(private AuthService: AuthService) {}

  resetPassword(): void {
    this.AuthService.resetPassword(this.token, this.newPassword).subscribe({
      next: (response) => {
        console.log('Password reset successful:', response);
      },
      error: (error) => {
        console.log('Error resetting password:', error);
      }
    });
  }
}
 