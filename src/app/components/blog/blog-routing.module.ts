import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListingComponent
      },
      {
        path: 'blog-listing',
        component: BlogListingComponent
      },
      {
        path: 'blog-details',
        component: BlogDetailsComponent
      },
      {
        path: 'create-blog',
        component: CreateBlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
