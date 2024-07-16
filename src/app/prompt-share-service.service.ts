import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentPrompts } from './current-prompts';


@Injectable({
  providedIn: 'root'
})
export class PromptShareServiceService {
  private selectedCategorySource = new BehaviorSubject<string>('');
  currentCategory = this.selectedCategorySource.asObservable();

  private promptsData = new BehaviorSubject<CurrentPrompts[]>([]);
  currentPrompts = this.promptsData.asObservable();

  constructor() {}

  changeSelectedCategory(category: string) {
    this.selectedCategorySource.next(category);
  }

  updatePromptsData(prompts: CurrentPrompts[]) {
    this.promptsData.next(prompts);
  }
}
