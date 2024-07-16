import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  categories: string[] = [];
  videos: any[] = [];
  activeCategory: string = 'جميع الدروس';
  searchQuery: FormControl = new FormControl('');

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchAllVideos();
    this.createParticles();
    this.setupSearch();
  }

  fetchCategories(): void {
    this.http.get<string[]>(`${this.apiUrl}/categories`).subscribe(
      (data: string[]) => {
        this.categories = ['جميع الدروس', ...data];
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  fetchAllVideos(): void {
    this.http.get<any[]>(`${this.apiUrl}/videos`).subscribe(
      (data: any[]) => {
        this.videos = data;
      },
      (error) => {
        console.error('Error fetching videos:', error);
      }
    );
  }

  fetchVideosByCategory(category: string): void {
    if (category === 'جميع الدروس') {
      this.fetchAllVideos();
    } else {
      this.http.get<any[]>(`${this.apiUrl}/videos/category/${category}`).subscribe(
        (data: any[]) => {
          this.videos = data;
        },
        (error) => {
          console.error('Error fetching videos by category:', error);
        }
      );
    }
  }

  setupSearch(): void {
    this.searchQuery.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.searchVideos(query);
      });
  }

  searchVideos(query: string): void {
    if (query) {
      this.http.get<any[]>(`${this.apiUrl}/videos/search`, {
        params: { query }
      }).subscribe(
        (data: any[]) => {
          this.videos = data;
        },
        (error) => {
          console.error('Error searching videos:', error);
        }
      );
    } else {
      this.fetchAllVideos();
    }
  }

  createParticles(): void {
    const particlesContainer = document.querySelector('.ai-particles') as HTMLElement;
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }
}
