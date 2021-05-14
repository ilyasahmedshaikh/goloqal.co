import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCardComponent } from './custom-card/custom-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    CustomCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
