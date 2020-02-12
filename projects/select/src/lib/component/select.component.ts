import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbComponentSize, NbComponentShape, NbSelectAppearance, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'dogs-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  selectedItem = '2';
  singleSelectValue = '1';
  multipleSelectValue = ['1'];
  disabledOptionValue = '3';

  selectedSize: NbComponentSize = 'medium';
  selectedShape: NbComponentShape = 'rectangle';

  fullWidth = true;

  appearances: NbSelectAppearance[] = ['outline', 'filled', 'hero'];
  sizes: NbComponentSize[] = ['tiny', 'small', 'medium', 'large', 'giant'];
  shapes: NbComponentShape[] = ['rectangle', 'semi-round', 'round'];
  statuses: NbComponentStatus[] = ['basic', 'primary', 'success', 'info', 'warning', 'danger', 'control'];

  public ngOnInit() {}

  selectDisabledOption(): void {
    this.singleSelectValue = this.disabledOptionValue;
    this.multipleSelectValue = [this.disabledOptionValue];
  }

  toggleFullWidth(): void {
    this.fullWidth = !this.fullWidth;
  }

}
