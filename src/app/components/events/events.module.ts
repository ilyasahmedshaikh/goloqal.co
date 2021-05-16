import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NearByEventsComponent } from './near-by-events/near-by-events.component';


@NgModule({
  declarations: [EventsComponent, EventListingComponent, EventDetailsComponent, CreateEventComponent, NearByEventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
