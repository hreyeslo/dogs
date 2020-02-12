import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'dogs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnChanges {

  @Input() title: string;
  @Input() images: string[] = ['https://images.dog.ceo/breeds/schnauzer-giant/n02097130_5618.jpg'];

  galery: GalleryItem[];

  constructor() { }

  ngOnChanges(): void {
    this.galery = this.images.map(image => {
      return new ImageItem({src: image, thumb: image});
    });
  }

}
