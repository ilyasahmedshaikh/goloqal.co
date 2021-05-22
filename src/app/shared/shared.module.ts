import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCardComponent } from './custom-card/custom-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    CustomCardComponent,
    SearchBarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent,
    SearchBarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
