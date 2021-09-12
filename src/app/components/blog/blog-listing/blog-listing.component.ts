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
    this.api.getAll(this.config.collections.categories_table).subscribe(res =>{
      this.categories = res;
    });
    console.log(this.categories)
  }

  getBlogs() {
    this.api.getAll(this.config.collections.blogs_table).subscribe(res =>{
      this.blogs = res;
    });
    console.log(this.blogs)
  }

  view(item) {
    this.router.navigate(['/blogs/blog-details'], { state: {blog: {...item, category_name: this.searchCategory(item.category_id)}} })
  }

  searchCategory(id) {
    let category = this.categories.find(i => i.id == id);
    return category.name;
  }

  readingTime(desc, content) {
    const wpm = 225;
    const wordsDesc = desc.trim().split(/\s+/).length;
    const wordsContent = content.trim().split(/\s+/).length;
    const time = Math.ceil((wordsDesc+wordsContent) / wpm);

    return time;
  }

}
