import { Tools } from './../../tools';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  toolInfo: any;
  constructor(
    private _Activated: ActivatedRoute,
    private _service: ToolsService
  ) {}

  ngOnInit(): void {
    let x = this._Activated.snapshot.params['id'];
  
    this._service.toolDetails(x).subscribe({
      next: (response) => {
        this.toolInfo = response.tools;
        console.log("Loaded tool info:", this.toolInfo);
      },
      error: (err) => {
        console.error("Failed to load tool details:", err);
      },
    });
  }
}
