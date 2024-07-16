import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  private apiUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) {}



  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getPrompts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prompts`);
  }

  getPromptsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prompts/category/${category}`);
  }

  getPromptsByMultipleCategories(categories: string[]): Observable<any[]> {
    let params = new HttpParams();
    categories.forEach(category => {
      params = params.append('category', category);
    });
    return this.http.get<any[]>(`${this.apiUrl}/prompts/categories`, { params });
  }
}