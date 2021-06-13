import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {

  category: any = [];
  topics: any = [];

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getTopics();
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories_table).subscribe(res =>{
      this.category = res;
    });
  }

  edit(item) {
    this.router.navigate(['/categories/add-category'], { state: {category: item} })
  }

  deleteCategory(id) {
    let request = this.api.delete(this.config.collections.categories_table, id);

    request.then(() => {
      console.log('deleted successfully');
      this.getCategories();
    })
    .catch((error) => {
      alert(error);
    });
  }

  getTopics() {
    this.api.getAll(this.config.collections.topics_table).subscribe(res =>{
      this.topics = res;
    });
  }

  editTopic(item) {
    this.router.navigate(['/categories/add-category'], { state: {topic: item} })
  }

  deleteTopic(id) {
    let request = this.api.delete(this.config.collections.topics_table, id);

    request.then(() => {
      console.log('deleted successfully');
      this.getTopics();
    })
    .catch((error) => {
      alert(error);
    });
  }

}
