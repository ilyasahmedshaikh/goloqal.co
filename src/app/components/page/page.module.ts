import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { NearByPageComponent } from './near-by-page/near-by-page.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { PageListingComponent } from './page-listing/page-listing.component';


@NgModule({
  declarations: [PageComponent, CreatePageComponent, NearByPageComponent, PageDetailsComponent, PageListingComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps_api,
      libraries: ["places"]
    })
  ]
})
export class PageModule { }
