import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent implements OnInit {

  categories: any = [];
  blogs: any = [];

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBlogs();
    this.getCategories();
  }

  getCategories() {
    this.categories = this.api.getAll(this.config.collections.categories_table);
    console.log(this.categories)
  }

  getBlogs() {
    this.blogs = this.api.getAll(this.config.collections.blogs_table);
    console.log(this.blogs)
  }

  view(item) {
    this.router.navigate(['/blogs/blog-details'], { state: {blog: item} })
  }

  searchCategory(id) {
    let category = this.categories.find(i => i.id == id);
    return category.name;
    // console.log(category)
  }

}
