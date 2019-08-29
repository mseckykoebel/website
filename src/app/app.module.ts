import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailCategoryComponent } from './components/detail_category/detail_category.component';
import { DetailPostsComponent } from './components/detail_posts/detail_posts.component';
import { DetailTagsComponent } from './components/detail_tags/detail_tags.component';
import { DetailTeamMembersComponent } from './components/detail_team-members/detail_team-members.component';
import { HomeComponent } from './components/home/home.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { NavBarComponent } from './symbols/nav-bar/nav-bar.component';
import { OldHomeComponent } from './components/old-home/old-home.component';
import { PostsTemplateComponent } from './components/posts-template/posts-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailCategoryComponent,
    DetailPostsComponent,
    DetailTagsComponent,
    DetailTeamMembersComponent,
    HomeComponent,
    LatestPostsComponent,
    NavBarComponent,
    OldHomeComponent,
    PostsTemplateComponent,
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

