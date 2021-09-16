import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/http/config/config.service'
import { ApiService } from '../../core/http/api/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  sliders: any = [];
  topics: any = [];
  categories: any = [];
  topicWiseData: any = [];
  selectedCountry: any = '';

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getData();
    this.getsliders();
  }

  view(item) {
    this.router.navigate(['/page/page-details/', item.id], { state: {page: item} })
  }

  getData() {
    let topics = this.config.topics;

    topics.forEach(t => {
      this.api.getWithQuery(this.config.collections.pages_table, "topic_id", "==", t.id).subscribe(response => {
        this.topicWiseData.push({
          ...t,
          data: response
        });
      });
    });
  }
  
  getSelectedCountry(event) {
    this.selectedCountry = event;
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories_table).subscribe(categ => {
      this.categories = categ;
    })
  }

  getsliders() {
    this.api.getAll(this.config.collections.sliders_table).subscribe(res => {
      this.sliders = res;
    })
  }

  onCategoryClick(item) {
    this.router.navigate(['/page/category-wise-page-listing', item.id], { state: {data: item} })
  }
}
