import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsComponent } from './shops.component';
import { ShopListingComponent } from './shop-listing/shop-listing.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { NearByShopsComponent } from './near-by-shops/near-by-shops.component';

const routes: Routes = [
  {
    path: '',
    component: ShopsComponent,
    children: [
      {
        path: '',
        component: ShopListingComponent
      },
      {
        path: 'shop-listing',
        component: ShopListingComponent
      },
      {
        path: 'shop-details',
        component: ShopDetailsComponent
      },
      {
        path: 'create-shop',
        component: CreateShopComponent
      },
      {
        path: 'nearby-shops',
        component: NearByShopsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
