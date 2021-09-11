import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'contact-listing',
        component: ContactListingComponent
      },
      {
        path: 'social-links',
        component: SocialLinksComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'topics-listing',
        component: TopicsListingComponent
      },
      {
        path: 'add-edit-slider',
        component: AddEditSliderComponent
      },
      {
        path: 'add-edit-about',
        component: AddEditAboutComponent
      },
      {
        path: 'add-edit-privacy-policy',
        component: AddEditPrivacyPolicyComponent
      },
      {
        path: 'add-edit-terms-conditions',
        component: TermsConditionsComponent
      },
      {
        path: 'add-edit-faq',
        component: FaqComponent
      },
      {
        path: 'add-edit-partner-with-us',
        component: PartnerWithUsComponent
      },
      {
        path: 'add-edit-subscribe-for-news',
        component: SubscribeForNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
