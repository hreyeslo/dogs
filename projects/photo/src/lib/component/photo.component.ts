import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'dogs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {

  @Input() images: string[] = [];
  @Input() loading: boolean;

  constructor() { }

}
