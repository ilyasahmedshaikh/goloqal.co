import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerWithUsRoutingModule } from './partner-with-us-routing.module';
import { PartnerWithUsComponent } from './partner-with-us.component';


@NgModule({
  declarations: [PartnerWithUsComponent],
  imports: [
    CommonModule,
    PartnerWithUsRoutingModule
  ]
})
export class PartnerWithUsModule { }
