import { Prompts } from './../../prompts';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { PromptService } from 'src/app/prompt.service';

@Component({
  selector: 'app-integrated-prompts',
  templateUrl: './integrated-prompts.component.html',
  styleUrls: ['./integrated-prompts.component.css']
})
export class IntegratedPromptsComponent implements OnChanges {
  categories: string[] = [];
  prompts: any[] = [];
  filteredPrompts: any[] = [];
  searchText: string = '';
  selectedCategories: string[] = [];
  expandedStates: Map<number, boolean> = new Map();

  constructor(private promptService: PromptService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadAllPrompts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredPrompts']) {
      this.cdRef.detectChanges(); // Force Angular to check for updates
    }
  }

  togglePrompt(questionId: number): void {
    const currentState = this.expandedStates.get(questionId) || false;
    this.expandedStates.set(questionId, !currentState);
    console.log(`Toggled prompt ${questionId} to state ${!currentState}`);
    this.cdRef.detectChanges(); // Force Angular to check for updates
  }

  copyText(): void {
    const text = document.getElementById('textToCopy')?.textContent;
    navigator.clipboard.writeText(text || '').then(() => {
      alert('Text copied to clipboard');
    }, (err) => {
      console.error('Failed to copy text: ', err);
    });
  }

  shareOnWhatsApp(prompt: any): void {
    const text = encodeURIComponent(`${prompt.QuestionText}\n\n${prompt.Prompts}`);
    const url = `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, '_blank');
  }

  loadCategories(): void {
    this.promptService.getCategories().subscribe(
      (data: string[]) => {
        this.categories = data;
        console.log('Categories loaded:', this.categories);
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  loadAllPrompts(): void {
    this.promptService.getPrompts().subscribe(
      (data: any[]) => {
        this.prompts = data;
        this.filteredPrompts = data;
        this.resetExpandedStates(); // Reset expanded states for the new prompts
        this.searchPrompts();
      },
      error => console.error('Error fetching prompts:', error)
    );
  }

  resetExpandedStates(): void {
    this.expandedStates.clear();
    this.filteredPrompts.forEach(prompt => {
      this.expandedStates.set(prompt.QuestionID, false);
    });
    console.log('Reset expanded states:', this.expandedStates);
  }

  trackById(index: number, item: any): number {
    return item.QuestionID; // Replace 'QuestionID' with your actual identifier property
  }

  onCategoryChange(event: any): void {
    const category = event.target.value;
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    }
    console.log('Selected categories:', this.selectedCategories);
  }

  applyCategoryFilter(): void {
    console.log('Applying category filter');
    console.log('Selected categories:', this.selectedCategories);

    if (this.selectedCategories.length === 1) {
      this.promptService.getPromptsByCategory(this.selectedCategories[0]).subscribe(
        (data: any[]) => {
          this.prompts = data;
          this.filteredPrompts = this.prompts; // Update filteredPrompts to match the new prompts
          this.resetExpandedStates(); // Reset expanded states for the new prompts
          this.searchPrompts(); // Apply search on the new prompts
        },
        (error: any) => {
          console.error('Error fetching prompts by category:', error);
        }
      );
    } else if (this.selectedCategories.length > 1) {
      this.promptService.getPromptsByMultipleCategories(this.selectedCategories).subscribe(
        (data: any[]) => {
          this.prompts = data;
          this.filteredPrompts = this.prompts; // Update filteredPrompts to match the new prompts
          this.resetExpandedStates(); // Reset expanded states for the new prompts
          this.searchPrompts(); // Apply search on the new prompts
        },
        (error: any) => {
          console.error('Error fetching prompts by multiple categories:', error);
        }
      );
    } else {
      this.filteredPrompts = this.prompts; // Show all prompts if no category is selected
      this.resetExpandedStates(); // Reset expanded states for the new prompts
      this.searchPrompts(); // Apply search on the new prompts
    }
  }

  searchPrompts(): void {
    console.log('Searching prompts with search text:', this.searchText);

    this.filteredPrompts = this.prompts.filter(prompt =>
      (prompt.QuestionText && prompt.QuestionText.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (prompt.Prompts && prompt.Prompts.some((p: string) => p.toLowerCase().includes(this.searchText.toLowerCase())))
    );

    console.log('Filtered prompts after searching:', this.filteredPrompts);
  }
}
