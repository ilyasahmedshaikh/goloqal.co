import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeForNewsRoutingModule } from './subscribe-for-news-routing.module';
import { SubscribeForNewsComponent } from './subscribe-for-news.component';


@NgModule({
  declarations: [SubscribeForNewsComponent],
  imports: [
    CommonModule,
    SubscribeForNewsRoutingModule
  ]
})
export class SubscribeForNewsModule { }
