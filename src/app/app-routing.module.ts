import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPostsComponent } from './components/detail_posts/detail_posts.component';
import { HomeComponent } from './components/home/home.component';
import { OldHomeComponent } from './components/old-home/old-home.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { PaginationBaseComponent } from './components/blog-posts/pagination-base/pagination-base.component';
import { PostsTemplateComponent } from './components/blog-posts/posts-template/posts-template.component';
import { ImageLicenseInfoComponent } from './components/image-license-info/image-license-info.component';
import { AdaptiveLearningTheDataComponent } from './components/blog-posts/adaptive-learning-the-data/adaptive-learning-the-data.component';
import { BlogHomePageComponent } from './components/blog-home-page/blog-home-page.component';
import { AdaptiveLearningComponent } from './components/blog-posts/adaptive-learning/adaptive-learning.component';
import { DetailTeamMembersComponent } from './components/detail_team-members/detail_team-members.component';
import { DetailCategoryComponent } from './components/detail_category/detail_category.component';
import { AboutComponent } from './components/about/about.component';
import { DetailTagsComponent } from './components/detail_tags/detail_tags.component';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';

const appRoutes: Routes = [
	{ path: 'detail_posts', component: DetailPostsComponent  },
	{ path: '', component: HomeComponent  },
	{ path: 'old_home', component: OldHomeComponent  },
	{ path: 'detail_team_members', component: DetailTeamMembersComponent  },
	{ path: 'latest_posts', component: LatestPostsComponent  },
	{ path: 'detail_category', component: DetailCategoryComponent  },
	{ path: 'detail_tags', component: DetailTagsComponent  },
	{ path: 'blog_posts_pagination_base', component: PaginationBaseComponent  },
	{ path: 'blog_posts_posts_template', component: PostsTemplateComponent  },
	{ path: 'image_license_info', component: ImageLicenseInfoComponent  },
	{ path: 'blog_home_page', component: BlogHomePageComponent  },
	{ path: 'blog_posts_adaptive_learning', component: AdaptiveLearningComponent  },
	{ path: 'about', component: AboutComponent  },
	{ path: 'style_guide', component: StyleGuideComponent  },
	{ path: 'blog_posts_adaptive_learning_the_data', component: AdaptiveLearningTheDataComponent  }
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

