import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Module parts
import { PHOTO_LITERALS, IPhotoLiterals } from './photo.model';
import { PhotoComponent } from './component/photo.component';
import { defaultLiterals } from './default.literals';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: PHOTO_LITERALS,
      useValue: new BehaviorSubject<IPhotoLiterals>(defaultLiterals)
    }
  ],
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
export class PhotoModule {}
