import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListingComponent } from './contact-listing/contact-listing.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { UsersComponent } from './users/users.component';
import { TopicsListingComponent } from './topics-listing/topics-listing.component';
import { AddEditSliderComponent } from './add-edit-slider/add-edit-slider.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
