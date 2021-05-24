import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListingComponent } from './contact-listing/contact-listing.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { UsersComponent } from './users/users.component';
import { TopicsListingComponent } from './topics-listing/topics-listing.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, ContactListingComponent, SocialLinksComponent, UsersComponent, TopicsListingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
