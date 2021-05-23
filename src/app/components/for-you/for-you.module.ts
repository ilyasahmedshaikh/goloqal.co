import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ForYouRoutingModule } from './for-you-routing.module';
import { ForYouComponent } from './for-you.component';


@NgModule({
  declarations: [ForYouComponent],
  imports: [
    CommonModule,
    ForYouRoutingModule,
    SharedModule
  ]
})
export class ForYouModule { }
