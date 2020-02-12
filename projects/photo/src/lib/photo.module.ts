import { NgModule } from '@angular/core';
// Module parts
import { PhotoComponent } from './component/photo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ]
})
export class PhotoModule {}
