import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribeForNewsComponent } from './subscribe-for-news.component';

const routes: Routes = [
  { path: '', component: SubscribeForNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribeForNewsRoutingModule { }
