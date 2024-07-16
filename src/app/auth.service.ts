import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.apiUrl;


  constructor(private _http: HttpClient) {
  }

  signUp(userData: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/signup `, userData);
  }

  logIn(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/login `, data, { withCredentials: true });
  }
  
  forgotPassword(email: string):Observable<any>{
    return this._http.post(`${this.baseUrl}/forgot-password `, { email });
  }
  
  resetPassword(token: string, newPassword: string): Observable<any> {
    const url = `${this.baseUrl}/reset-password `;
    const body = {
      token: token,
      new_password: newPassword
    };
    return this._http.post(url, body);
  }
}