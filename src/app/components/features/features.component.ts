import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  items = [
    {
      icon: 'assets/card1.svg',
      title: 'مقالات',
      description: 'لإثراء معلوماتك عن الذكاء الاصطناعي وكل جديد فيه، يمكنك قراءة مقالاتنا عن كيفية استخدام الذكاء وفائدته لمجتمعنا.',
      buttonText: 'اطلع على المقالات',
      link: "/news"
    },
    {
      icon: 'assets/card2.svg',
      title: 'تلقينات الذكاء الاصطناعي',
      description: 'وفرنا لك تلقينات جاهزة للاستخدام في معظم المجالات لاستخراج أفضل النتائج من الذكاء الاصطناعي',
      buttonText: 'ابدأ الاستخدام',
      link: '/prompts'
    },
    {
      icon: 'assets/card3.svg',
      title: 'أدوات الذكاء الاصطناعي',
      description: 'جمعنا لك أكثر من 5000 أداة في مكان واحد لتسهل عليك عملية البحث عن الأداة التي تحتاجها في مجالات مختلفة',
      buttonText: 'ابدأ البحث عن أداة',
      link: '/home'
    }
    // ... other items
  ];

  constructor(private router: Router) {}

  getCardLinkUrl(link: string): string {
    return this.router.createUrlTree([link]).toString();
  }
}
