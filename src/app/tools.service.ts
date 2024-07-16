import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Prompts } from './prompts';
import { CurrentPrompts } from './current-prompts';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  private baseUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getTool(): Observable<any> {
    return this._http.get(`${this.baseUrl}/tools`);
  }
  getPrompts():Observable<any>{
    return this._http.get(`${this.baseUrl}/prompts `);

  }
  toolDetails(id: any): Observable<any> {
    return this._http.get(`${this.baseUrl}/ToolID=${id}`);
  }

  getCategories(): Observable<any> {
    return this._http.get(`${this.baseUrl}/categories `);
  }

  getPromptsByCategory(category: string): Observable<any> {
    return this._http.get<CurrentPrompts[]>(`${this.baseUrl}/prompts/category/${category}`).pipe(
      tap(data => console.log('API Response:', data))
    );
  }


  getFilteredTools(category: string): Observable<any> {
    const encodedCategory = encodeURIComponent(category);
    console.log("Encoded category:", encodedCategory);
    return this._http.get<any>(`${this.baseUrl}/categoryName=${encodedCategory}`);
  }

  searchToolsByName(name: string): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/Name=${encodeURIComponent(name)}`);
  }
}
