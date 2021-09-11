import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListingComponent } from './contact-listing/contact-listing.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { UsersComponent } from './users/users.component';
import { TopicsListingComponent } from './topics-listing/topics-listing.component';
import { AddEditSliderComponent } from './add-edit-slider/add-edit-slider.component';
import { AddEditAboutComponent } from './add-edit-about/add-edit-about.component';
import { AddEditPrivacyPolicyComponent } from './add-edit-privacy-policy/add-edit-privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { FaqComponent } from './faq/faq.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { SubscribeForNewsComponent } from './subscribe-for-news/subscribe-for-news.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, ContactListingComponent, SocialLinksComponent, UsersComponent, TopicsListingComponent, AddEditSliderComponent, AddEditAboutComponent, AddEditPrivacyPolicyComponent, TermsConditionsComponent, FaqComponent, PartnerWithUsComponent, SubscribeForNewsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdminModule { }
