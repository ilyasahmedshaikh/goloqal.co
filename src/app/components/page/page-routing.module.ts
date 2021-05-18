import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { NearByPageComponent } from './near-by-page/near-by-page.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { PageListingComponent } from './page-listing/page-listing.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        component: PageListingComponent
      },
      {
        path: 'page-listing',
        component: PageListingComponent
      },
      {
        path: 'page-details',
        component: PageDetailsComponent
      },
      {
        path: 'create-page',
        component: CreatePageComponent
      },
      {
        path: 'nearby-page',
        component: NearByPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
