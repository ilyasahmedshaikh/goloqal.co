import { Component, OnInit } from '@angular/core';
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

  getCategories() {
    this.categories = this.api.getAll(this.config.collections.categories_table);
  }

  getPages() {
    this.pages = this.api.getAll(this.config.collections.pages_table);

    this.placesCommunities = this.pages
  }

}
