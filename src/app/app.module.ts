import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AdaptiveLearningComponent } from './components/blog-posts/adaptive-learning/adaptive-learning.component';
import { AdaptiveLearningTheDataComponent } from './components/blog-posts/adaptive-learning-the-data/adaptive-learning-the-data.component';
// tslint:disable-next-line:max-line-length
import { AdaptiveLearningTheGoodAndTheConclusionComponent } from './components/blog-posts/adaptive-learning-the-good-and-the-conclusion/adaptive-learning-the-good-and-the-conclusion.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogHomePageComponent } from './components/blog-home-page/blog-home-page.component';
import { DetailCategoryComponent } from './components/detail_category/detail_category.component';
import { DetailPostsComponent } from './components/detail_posts/detail_posts.component';
import { DetailTagsComponent } from './components/detail_tags/detail_tags.component';
import { DetailTeamMembersComponent } from './components/detail_team-members/detail_team-members.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './symbols/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AboutComponent,
    AdaptiveLearningComponent,
    AdaptiveLearningTheDataComponent,
    AdaptiveLearningTheGoodAndTheConclusionComponent,
    AppComponent,
    BlogHomePageComponent,
    DetailCategoryComponent,
    DetailPostsComponent,
    DetailTagsComponent,
    DetailTeamMembersComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [
    {'useValue':'/','provide':'APP_BASE_HREF'},
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }

