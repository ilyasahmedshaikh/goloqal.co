import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  categories: any = [];
  data: any = {};

  constructor(
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation().extras.state?.blog;
  }

  ngOnInit(): void {
    if(this.data) {
      console.log('blog-details', this.data);
    }
  }

  edit(data) {
    this.router.navigate(['/blogs/create-blog'], { state: {blog: data} })
  }

  searchCategory(id) {
    let category = this.categories.find(i => i.id == id);
    return category.name;
  }

}
