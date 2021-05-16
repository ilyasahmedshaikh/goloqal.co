import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './shops.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopListingComponent } from './shop-listing/shop-listing.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { NearByShopsComponent } from './near-by-shops/near-by-shops.component';


@NgModule({
  declarations: [ShopsComponent, ShopDetailsComponent, ShopListingComponent, CreateShopComponent, NearByShopsComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
