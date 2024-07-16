import { Prompts } from './../../prompts';
// import { HttpClient } from '@angular/common/http';
// import { ChangeDetectorRef, Component, Input } from '@angular/core';
// import { CurrentPrompts } from 'src/app/current-prompts';
// import { PromptShareServiceService } from 'src/app/prompt-share-service.service';
// import { ToolsService } from 'src/app/tools.service';

// @Component({
//   selector: 'app-current-prompt',
//   templateUrl: './current-prompt.component.html',
//   styleUrls: ['./current-prompt.component.css']
// })
// export class CurrentPromptComponent {
//   showCopyMessage: boolean = false;
//   @Input()
//   imagesList!: string[];
//   prompts: CurrentPrompts[] = [];
//   selectedCategory:string=''

//   constructor(private promptShareService: PromptShareServiceService ,
//     private cd: ChangeDetectorRef
//   ) {} // Inject the service


//   copyText(): void {
//     const text = document.getElementById('textToCopy')?.textContent;
//     navigator.clipboard.writeText(text || '').then(() => {
//       alert('Text copied to clipboard');
//     }, (err) => {
//       console.error('Failed to copy text: ', err);
//     });
//   }




  
//   ngOnInit() {
//     // Subscribe to prompts data
//     this.promptShareService.currentPrompts.subscribe(prompts => {
//       this.prompts = prompts;
//       console.log('Received prompts:', this.prompts);  // For debugging purposes
//     });

//     // Subscribe to the current category
//     this.promptShareService.currentCategory.subscribe(category => {
//       this.selectedCategory = category;
//       console.log('Current category:', this.selectedCategory);  // For debugging purposes
//     });
//   }
// }
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CurrentPrompts } from 'src/app/current-prompts';
import { PromptShareServiceService } from 'src/app/prompt-share-service.service';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-current-prompt',
  templateUrl: './current-prompt.component.html',
  styleUrls: ['./current-prompt.component.css']
})
export class CurrentPromptComponent {
  showCopyMessage: boolean = false;
  @Input()
  imagesList!: string[];
  prompts: CurrentPrompts[] = [];
  selectedCategory: string = '';
  expandedStates: Map<number, boolean> = new Map();
  filteredPrompts: CurrentPrompts[] = [];
  searchText: string = '';

  constructor(private promptShareService: PromptShareServiceService,
    private cd: ChangeDetectorRef
  ) {}

  togglePrompt(questionId: number): void {
    const currentState = this.expandedStates.get(questionId) || false;
    this.expandedStates.set(questionId, !currentState);
  }
  copyText(): void {
    const text = document.getElementById('textToCopy')?.textContent;
    navigator.clipboard.writeText(text || '').then(() => {
      alert('Text copied to clipboard');
    }, (err) => {
      console.error('Failed to copy text: ', err);
    });
  }




  filterPrompts() {
    if (!this.searchText) {
      this.filteredPrompts = this.prompts;
    } else {
      this.filteredPrompts = this.prompts.filter(prompt => {
        // Lowercase the search text once for efficiency
        const searchTextLower = this.searchText.toLowerCase();
        
        // Check if QuestionText matches
        if (prompt.QuestionText.toLowerCase().includes(searchTextLower)) {
          return true;
        }
  
        // Check if any of the Prompt fields matches
        return [prompt.Prompt1, prompt.Prompt2, prompt.Prompt3, prompt.Prompt4, prompt.Prompt5,
                prompt.Prompt6, prompt.Prompt7, prompt.Prompt8, prompt.Prompt9, prompt.Prompt10]
                .some(p => p?.toLowerCase().includes(searchTextLower));
      });
    }
  }
  ngOnInit() {
    this.promptShareService.currentPrompts.subscribe(prompts => {
      this.prompts = prompts;
      this.filteredPrompts = prompts;
      console.log('Received prompts:', this.prompts);
    });

    this.promptShareService.currentCategory.subscribe(category => {
      this.selectedCategory = category;
      console.log('Current category:', this.selectedCategory);
    });
  }

  // ngOnInit() {
  //   this.promptShareService.currentPrompts.subscribe(prompts => {
  //     this.prompts = prompts;
  //     this.prompts.forEach(prompt => {
  //       this.expandedStates.set(prompt.QuestionID, false);
  //     });
  //     console.log('Received prompts:', this.prompts);
  //   });

  //   this.promptShareService.currentCategory.subscribe(category => {
  //     this.selectedCategory = category;
  //     console.log('Current category:', this.selectedCategory);
  //   });
  // }


  ngOnChanges() {
    this.filterPrompts();

  }
}