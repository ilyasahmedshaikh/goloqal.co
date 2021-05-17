import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        categoryName: 'Category 1'
      },
      {
        id: 2,
        categoryName: 'Category 2'
      }
      ,
      {
        id: 3,
        categoryName: 'Category 3'
      },
      {
        id: 4,
        categoryName: 'Category 4'
      },
      {
        id: 5,
        categoryName: 'Category 5'
      },
      {
        id: 6,
        categoryName: 'Category 6'
      }
    ]
  }

}
