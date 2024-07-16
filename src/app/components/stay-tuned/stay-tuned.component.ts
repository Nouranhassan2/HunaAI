import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { gsap } from 'gsap';

@Component({
  selector: 'app-stay-tuned',
  templateUrl: './stay-tuned.component.html',
  styleUrls: ['./stay-tuned.component.css']
})
export class StayTunedComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.createNeurons();
    this.initAnimations();
    this.initParticleEffect();
  }

  createNeurons(): void {
    const aiBrain = document.getElementById('aiBrain');
    if (aiBrain) {
      for (let i = 0; i < 20; i++) {
        const neuron = document.createElement('div');
        neuron.classList.add('neuron');
        neuron.style.left = `${Math.random() * 100}%`;
        neuron.style.top = `${Math.random() * 100}%`;
        aiBrain.appendChild(neuron);
      }
    }
  }

  initAnimations(): void {
    gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from("p", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.5 });
    gsap.from(".feature-card", { duration: 0.8, scale: 0.5, opacity: 0, ease: "back.out(1.7)", stagger: 0.2, delay: 1 });
    gsap.from(".coming-soon", { duration: 1, rotation: 720, opacity: 0, ease: "power2.out", delay: 1.5 });
    gsap.from(".email-form", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 2 });
  }

  initParticleEffect(): void {
    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.9) {
        this.createParticle(e.clientX, e.clientY);
      }
    });
  }

  createParticle(x: number, y: number): void {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const destinationX = x + (Math.random() - 0.5) * 200;
    const destinationY = y + (Math.random() - 0.5) * 200;

    gsap.to(particle, {
      x: destinationX,
      y: destinationY,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        document.body.removeChild(particle);
      }
    });
  }

  onSubmit(emailForm: NgForm): void {
    const email = emailForm.value.email;
    this.http.post('http://localhost:5000/subscribe', { email })
      .subscribe({
        next: (response) => {
          alert(`شكرًا لك على اهتمامك! سنرسل التحديثات إلى ${email} قريبًا.`);
          emailForm.reset();
        },
        error: (error) => {
          console.error('Error sending email:', error);
          alert('حدث خطأ أثناء إرسال البريد الإلكتروني. حاول مرة أخرى لاحقًا.');
        }
      });
  }
}
