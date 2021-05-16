import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NearByEventsComponent } from './near-by-events/near-by-events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: '',
        component: EventListingComponent
      },
      {
        path: 'event-listing',
        component: EventListingComponent
      },
      {
        path: 'event-details',
        component: EventDetailsComponent
      },
      {
        path: 'create-event',
        component: CreateEventComponent
      },
      {
        path: 'nearby-events',
        component: NearByEventsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
