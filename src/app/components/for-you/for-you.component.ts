import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from '../../core/http/config/config.service'
import { ApiService } from '../../core/http/api/api.service';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  data: any = [];
  pages: any = [];
  events: any = []
  shops: any = []

  popularServices: any = []
  thingsActivities: any = []
  placesCommunities: any = []

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPages();
  }

  view(item) {
    let replaceSpaceToDash = item.title.split(' ').join('-');
    this.router.navigate(['/page/page-details/', replaceSpaceToDash], { state: {page: item} })
  }

  getPages() {
    this.api.getAll(this.config.collections.pages_table).subscribe(res =>{
      this.pages = res;
    });

    this.events = this.pages
    this.shops = this.pages
    this.popularServices = this.pages
    this.thingsActivities = this.pages
    this.placesCommunities = this.pages
  }

}
