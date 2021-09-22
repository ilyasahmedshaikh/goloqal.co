import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-category-wise-page-listing',
  templateUrl: './category-wise-page-listing.component.html',
  styleUrls: ['./category-wise-page-listing.component.scss']
})
export class CategoryWisePageListingComponent implements OnInit {

  id: any = '';
  data: any = {};
  pages: any = [];

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ){
    this.data = this.router.getCurrentNavigation().extras.state?.data;
  }

  ngOnInit(): void {
    // getting id from route
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
      }
    });

    console.log(this.data);

    if (this.data == undefined) {
      this.router.navigateByUrl('/homepage');
    } else {
      this.getPages();
    }
  }

  getPages() {
    this.api.getWithQuery(this.config.collections.pages_table, 'category_id', '==', this.data.id).subscribe(res => {
      this.pages = res;
      console.log(this.pages);
    })
  }

  view(item) {
    let replaceSpaceToDash = item.title.split(' ').join('-');
    this.router.navigate(['/page/page-details/', replaceSpaceToDash], { state: {page: item} })
  }

}
