import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  newsInfo: any;

  constructor(
    private _Activated: ActivatedRoute,
    private _service: NewsService
  ) {}

  ngOnInit(): void {
    const id = this._Activated.snapshot.params['id'];
    this._service.newsDetails(id).subscribe({
      next: (response) => {
        this.newsInfo = response;
        console.log("Loaded news info:", this.newsInfo);
      },
      error: (err) => {
        console.error("Failed to load news details:", err);
      }
    });
  }
}
