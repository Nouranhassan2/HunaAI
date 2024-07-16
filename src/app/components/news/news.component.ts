// import { Component, OnInit } from '@angular/core';
// import { News } from 'src/app/news';
// import { NewsService } from 'src/app/news.service';

// @Component({
//   selector: 'app-news',
//   templateUrl: './news.component.html',
//   styleUrls: ['./news.component.css']
// })
// export class NewsComponent implements OnInit {
//   newsList: News[] = []; // Typed as an array of NewsItem

//   constructor(private newsService: NewsService) {}

//   ngOnInit(): void {
//     this.newsService.getAllNews().subscribe({
//       next: (response) => {
//         this.newsList = response;
//         console.log('News data:', this.newsList);
//       },
//       error: (error) => {
//         console.error('Error fetching news:', error);
//       }
//     });
//   }

//   shareOnWhatsApp(newsItem: News): void {
//     const text = encodeURIComponent(`${newsItem.NewsTitle}\n\n${newsItem.NewsContent}`);
//     const url = `https://api.whatsapp.com/send?text=${text}`;
//     window.open(url, '_blank');
//   }

//   shareOnTwitter(newsItem: News): void {
//     const text = encodeURIComponent(`${newsItem.NewsTitle}\n\n${newsItem.NewsContent}`);
//     const url = `https://twitter.com/intent/tweet?text=${text}`;
//     window.open(url, '_blank');
//   }

//   shareOnInstagram(newsItem: News): void {
//     // Instagram sharing usually involves sharing a link or image, not text.
//     const url = `https://www.instagram.com/`;
//     window.open(url, '_blank');
//   }
// }


import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[] = []; // Typed as an array of NewsItem
  showFullContent: boolean[] = []; // Array to keep track of toggled state for each news item

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: (response) => {
        this.newsList = response;
        // Initialize showFullContent with false for each news item
        this.showFullContent = new Array(this.newsList.length).fill(false);
        console.log('News data:', this.newsList);
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      }
    });
  }

  shareOnWhatsApp(newsItem: News): void {
    const text = encodeURIComponent(`${newsItem.NewsTitle}\n\n${newsItem.NewsContent}`);
    const url = `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, '_blank');
  }

  shareOnTwitter(newsItem: News): void {
    const text = encodeURIComponent(`${newsItem.NewsTitle}\n\n${newsItem.NewsContent}`);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
  }

  shareOnInstagram(newsItem: News): void {
    // Instagram sharing usually involves sharing a link or image, not text.
    const url = `https://www.instagram.com/`;
    window.open(url, '_blank');
  }

  toggleContent(index: number): void {
    this.showFullContent[index] = !this.showFullContent[index];
  }
}


