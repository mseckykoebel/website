import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AdaptiveLearningComponent } from './components/blog-posts/adaptive-learning/adaptive-learning.component';
import { AdaptiveLearningTheDataComponent } from './components/blog-posts/adaptive-learning-the-data/adaptive-learning-the-data.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogHomePageComponent } from './components/blog-home-page/blog-home-page.component';
import { DetailCategoryComponent } from './components/detail_category/detail_category.component';
import { DetailPostsComponent } from './components/detail_posts/detail_posts.component';
import { DetailTagsComponent } from './components/detail_tags/detail_tags.component';
import { DetailTeamMembersComponent } from './components/detail_team-members/detail_team-members.component';
import { HomeComponent } from './components/home/home.component';
import { ImageLicenseInfoComponent } from './components/image-license-info/image-license-info.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { NavBarComponent } from './symbols/nav-bar/nav-bar.component';
import { OldHomeComponent } from './components/old-home/old-home.component';
import { PaginationBaseComponent } from './components/blog-posts/pagination-base/pagination-base.component';
import { PostsTemplateComponent } from './components/blog-posts/posts-template/posts-template.component';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';

@NgModule({
  declarations: [
    AboutComponent,
    AdaptiveLearningComponent,
    AdaptiveLearningTheDataComponent,
    AppComponent,
    BlogHomePageComponent,
    DetailCategoryComponent,
    DetailPostsComponent,
    DetailTagsComponent,
    DetailTeamMembersComponent,
    HomeComponent,
    ImageLicenseInfoComponent,
    LatestPostsComponent,
    NavBarComponent,
    OldHomeComponent,
    PaginationBaseComponent,
    PostsTemplateComponent,
    StyleGuideComponent,
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

