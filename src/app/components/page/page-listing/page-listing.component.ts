import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.scss']
})
export class PageListingComponent implements OnInit {

  data: any = [];
  categories: any = [];

  pages: any = [];
  placesCommunities: any = []
  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getCategories();
    this.getPages();
  }

  formInit() {
    this.programForm = this.fb.group({
      category_id: ['', Validators.required]
    });
  }

  view(item) {
    this.router.navigate(['/page/page-details/', item.id], { state: {page: item} })
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories_table).subscribe(res =>{
      this.categories = res;
    });
  }

  getPages() {
    this.api.getAll(this.config.collections.pages_table).subscribe(res =>{
      this.pages = res;
    });

    this.placesCommunities = this.pages
  }

}
