import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EventsComponent } from './events/events.component';
import { LocalServicesComponent } from './local-services/local-services.component';
import { PlaceCommunityComponent } from './place-community/place-community.component';
import { ShopsProductsComponent } from './shops-products/shops-products.component';
import { ThingsActivitesComponent } from './things-activites/things-activites.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   component: LoginComponent
      // },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'local-services',
        component: LocalServicesComponent
      },
      {
        path: 'place-community',
        component: PlaceCommunityComponent
      },
      {
        path: 'shops-products',
        component: ShopsProductsComponent
      },
      {
        path: 'things-activites',
        component: ThingsActivitesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
