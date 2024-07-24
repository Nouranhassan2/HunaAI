import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromptsComponent } from './components/prompts/prompts.component';
import { CurrentPromptComponent } from './components/current-prompt/current-prompt.component';
import { SafeURLPipe } from './safe-url.pipe';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { IntegratedPromptsComponent } from './components/integrated-prompts/integrated-prompts.component';
import { VideosComponent } from './components/videos/videos.component';
import { StayTunedComponent } from './components/stay-tuned/stay-tuned.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, NotfoundComponent, NavbarComponent, ShowCaseComponent, HeroComponent, FeaturesComponent, AboutUsComponent, FooterComponent, PromptsComponent, CurrentPromptComponent, SafeURLPipe, SignUpComponent, NewsComponent, NewsDetailsComponent, IntegratedPromptsComponent, VideosComponent, StayTunedComponent, SignInComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
