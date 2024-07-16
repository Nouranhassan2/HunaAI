// import { CurrentPromptComponent } from './components/current-prompt/current-prompt.component';
// import { Component, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { DetailsComponent } from './components/details/details.component';
// import { NotfoundComponent } from './components/notfound/notfound.component';
// import { ShowCaseComponent } from './components/show-case/show-case.component';
// import { PromptsComponent } from './components/prompts/prompts.component';
// import { NewsComponent } from './components/news/news.component';
// import { NewsDetailsComponent } from './components/news-details/news-details.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { IntegratedPromptsComponent } from './components/integrated-prompts/integrated-prompts.component';
// import { VideosComponent } from './components/videos/videos.component';
// import { StayTunedComponent } from './components/stay-tuned/stay-tuned.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';

// const routes: Routes = [
//   { path: '', component: ShowCaseComponent },

//   { path: 'toolDetails/:id', component: DetailsComponent },
//   { path: 'prompts', component: IntegratedPromptsComponent },
//   { path: 'news', component: NewsComponent },
//   { path: 'newsDetails/:id', component: NewsDetailsComponent },

//   { path:'currentPrompts',component:CurrentPromptComponent},
//   { path: 'home', component: HomeComponent },
//   { path: 'promptsnew', component: IntegratedPromptsComponent },
//   { path: 'staytuned', component: StayTunedComponent },


//   { path: 'signup', component: SignUpComponent },
//   { path: 'login', component: SignInComponent },

//   { path: 'videos', component: VideosComponent },



//   { path: '**', component: NotfoundComponent },


// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { HomeComponent } from './components/home/home.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { IntegratedPromptsComponent } from './components/integrated-prompts/integrated-prompts.component';
import { CurrentPromptComponent } from './components/current-prompt/current-prompt.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VideosComponent } from './components/videos/videos.component';
import { StayTunedComponent } from './components/stay-tuned/stay-tuned.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: ShowCaseComponent },
  { path: 'news', component: NewsComponent },
    { path: 'toolDetails/:id', component: DetailsComponent },

  { path: 'newsDetails/:id', component: NewsDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'prompts', component: IntegratedPromptsComponent },
  { path: 'currentPrompts', component: CurrentPromptComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'staytuned', component: StayTunedComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}