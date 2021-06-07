import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';


@NgModule({
  declarations: [BlogComponent, BlogDetailsComponent, BlogListingComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
