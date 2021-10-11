import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCardComponent } from './custom-card/custom-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { SocialShareComponent } from './social-share/social-share.component';

@NgModule({
  declarations: [
    CustomCardComponent,
    SearchBarComponent,
    LoaderComponent,
    ImageUploaderComponent,
    SocialShareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent,
    SearchBarComponent,
    LoaderComponent,
    ImageUploaderComponent,
    SocialShareComponent
  ]
})
export class SharedModule { }
