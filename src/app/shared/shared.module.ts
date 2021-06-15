import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCardComponent } from './custom-card/custom-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    CustomCardComponent,
    SearchBarComponent,
    LoaderComponent,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent,
    SearchBarComponent,
    LoaderComponent,
    ImageUploaderComponent
  ]
})
export class SharedModule { }
