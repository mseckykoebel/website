import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPostsComponent } from './components/detail_posts/detail_posts.component';
import { HomeComponent } from './components/home/home.component';
import { AdaptiveLearningTheDataComponent } from './components/blog-posts/adaptive-learning-the-data/adaptive-learning-the-data.component';
import { BlogHomePageComponent } from './components/blog-home-page/blog-home-page.component';
import { AdaptiveLearningComponent } from './components/blog-posts/adaptive-learning/adaptive-learning.component';
import { AdaptiveLearningTheGoodAndTheConclusionComponent } from './components/blog-posts/adaptive-learning-the-good-and-the-conclusion/adaptive-learning-the-good-and-the-conclusion.component';
import { DetailTeamMembersComponent } from './components/detail_team-members/detail_team-members.component';
import { DetailCategoryComponent } from './components/detail_category/detail_category.component';
import { AboutComponent } from './components/about/about.component';
import { DetailTagsComponent } from './components/detail_tags/detail_tags.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent  },
	{ path: 'about', component: AboutComponent  },
	{ path: 'detail_posts', component: DetailPostsComponent  },
	{ path: 'blog_posts_adaptive_learning_the_data', component: AdaptiveLearningTheDataComponent  },
	{ path: 'blog_home_page', component: BlogHomePageComponent  },
	{ path: 'blog_posts_adaptive_learning', component: AdaptiveLearningComponent  },
	{ path: 'blog_posts_adaptive_learning_the_good_and_the_conclusion', component: AdaptiveLearningTheGoodAndTheConclusionComponent  },
	{ path: 'detail_category', component: DetailCategoryComponent  },
	{ path: 'detail_tags', component: DetailTagsComponent  },
	{ path: 'detail_team_members', component: DetailTeamMembersComponent  }
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

