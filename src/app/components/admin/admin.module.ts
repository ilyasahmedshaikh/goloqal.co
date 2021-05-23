import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EventsComponent } from './events/events.component';
import { ShopsProductsComponent } from './shops-products/shops-products.component';
import { LocalServicesComponent } from './local-services/local-services.component';
import { PlaceCommunityComponent } from './place-community/place-community.component';
import { ThingsActivitesComponent } from './things-activites/things-activites.component';


@NgModule({
  declarations: [AdminComponent, EventsComponent, ShopsProductsComponent, LocalServicesComponent, PlaceCommunityComponent, ThingsActivitesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
