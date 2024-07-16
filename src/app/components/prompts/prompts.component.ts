import { PromptShareServiceService } from './../../prompt-share-service.service';
import { Tools } from './../../tools';
import { Component } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { CurrentPrompts } from 'src/app/current-prompts';
import { Prompts } from 'src/app/prompts';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent {
  backgroundImageUrl: string='';

  CatList: any[] = [];
  prompts: any[] = [];  // Adjust type based on the structure of your prompts
  QuestionText:string=''
  selectedCategory: string = ''; // This will hold the name of the selected category
  imagesList: string[] = [
    'assets/testing1.webp', 'assets/user_story1.webp', 'assets/business_management1.webp', 'assets/programming1.webp', 
    'assets/marketing1.webp', 'assets/design1.webp', 'assets/social_media1.webp', 'assets/hr1.webp', 
    'assets/seo1.webp', 'assets/analysis1.webp', 'assets/general1.webp', 'assets/genetate1.webp', 'assets/content1.webp'
  ];
  
  constructor(private _tool: ToolsService, private promptShareService: PromptShareServiceService) {}



  ngOnInit(): void {
    this._tool. getCategories().subscribe({
      next: (response) => {
        this.CatList = response;
        console.log(this.CatList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSelectCategory(category: string, index: number): void {
    this.selectedCategory = category;
    this.backgroundImageUrl = this.imagesList[index];
  }
  // selectCategory(category: string , index: number): void {
  //   this.selectedCategory = category;
  //   this.promptShareService.changeSelectedCategory(category);
  //   this._tool.getPromptsByCategory(category).subscribe({
  //     next: (data: CurrentPrompts[]) => {
  //       this.prompts = data;
  //       this.promptShareService.updatePromptsData(data);  // Ensure this line is executing correctly
  //       console.log("Prompts for category", category, ":", this.prompts);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching prompts:', err);
  //     }
  //   });
  // }
}



