import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
// Component parts
import { SelectItems, ISelectItem } from '../select.model';

@Component({
  selector: 'dogs-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  @Input() items: SelectItems = [];
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  trackBy(index: number, item: ISelectItem) {
    return item.value;
  }

}
