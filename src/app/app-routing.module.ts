import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPostsComponent } from './components/detail_posts/detail_posts.component';
import { HomeComponent } from './components/home/home.component';
import { OldHomeComponent } from './components/old-home/old-home.component';
import { DetailTeamMembersComponent } from './components/detail_team-members/detail_team-members.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { DetailCategoryComponent } from './components/detail_category/detail_category.component';
import { DetailTagsComponent } from './components/detail_tags/detail_tags.component';
import { PostsTemplateComponent } from './components/posts-template/posts-template.component';

const appRoutes: Routes = [
	{ path: 'detail_posts', component: DetailPostsComponent  },
	{ path: '', component: HomeComponent  },
	{ path: 'old_home', component: OldHomeComponent  },
	{ path: 'detail_team_members', component: DetailTeamMembersComponent  },
	{ path: 'latest_posts', component: LatestPostsComponent  },
	{ path: 'detail_category', component: DetailCategoryComponent  },
	{ path: 'detail_tags', component: DetailTagsComponent  },
	{ path: 'posts_template', component: PostsTemplateComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

