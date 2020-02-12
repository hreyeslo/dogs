import { GalleryModule } from '@ngx-gallery/core';
import { NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
// Module parts
import { PhotoComponent } from './component/photo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule,
    NbCardModule
  ],
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ]
})
export class PhotoModule {}
