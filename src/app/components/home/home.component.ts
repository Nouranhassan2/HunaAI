import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tools } from 'src/app/tools';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toolList: Tools[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';

  constructor(private _tool: ToolsService, private router: Router) {}

  ngOnInit(): void {
    this._tool.getTool().subscribe({
      next: (response) => {
        this.toolList = response.tools;
        console.log(response);
        console.log(this.toolList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectCategory(category: string): void {
    console.log("Selected category (raw):", category);
    this._tool.getFilteredTools(category).subscribe({
      next: (response: any) => {
        console.log("API response for category:", category, response);
        if (response.tools && response.tools.length > 0) {
          this.toolList = response.tools;
        } else {
          this.toolList = [];
          console.log("No tools found for category:", category);
        }
      },
      error: (error) => console.error('Error fetching data for category:', category, error)
    });
  }

  onSearch(): void {
    if (!this.searchQuery) {
      this.loadInitialTools(); // Function to load initial tools or all tools
      return;
    }
    this._tool.searchToolsByName(this.searchQuery).subscribe({
      next: (response: any) => {
        this.toolList = response.tools;
        console.log("Search results:", response);
      },
      error: (error) => console.error('Error searching tools:', error)
    });
  }

  loadInitialTools(): void {
    this._tool.getTool().subscribe({
      next: (response) => {
        this.toolList = response.tools;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getToolDetailsUrl(toolId: number): string {
    return this.router.createUrlTree(['/toolDetails', toolId.toString()]).toString();
  }
}
