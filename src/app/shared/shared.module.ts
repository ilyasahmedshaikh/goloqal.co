import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCardComponent } from './custom-card/custom-card.component';

@NgModule({
  declarations: [
    CustomCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent
  ]
})
export class SharedModule { }
