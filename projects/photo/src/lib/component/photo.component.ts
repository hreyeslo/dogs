import { Component, ChangeDetectionStrategy, Input, Inject, Optional } from '@angular/core';
// Component parts
import { PHOTO_LITERALS, PhotoLiterals } from '../photo.model';

@Component({
  selector: 'dogs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {

  @Input() images: string[] = [];
  @Input() loading: boolean;

  constructor(@Optional() @Inject(PHOTO_LITERALS) public literals$: PhotoLiterals) { }

}
