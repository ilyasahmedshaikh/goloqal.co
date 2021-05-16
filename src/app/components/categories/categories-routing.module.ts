import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: CategoryListingComponent
      },
      {
        path: 'category-listing',
        component: CategoryListingComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
