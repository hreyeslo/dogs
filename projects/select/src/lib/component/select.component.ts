import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
// Component parts
import { SelectItems, ISelectItem, SELECT_LITERALS, SelectLiterals } from '../select.model';

@Component({
  selector: 'dogs-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  @Input() items: SelectItems = [];
  @Input() selectedItem: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(@Optional() @Inject(SELECT_LITERALS) public literals$: SelectLiterals) {}

  trackBy(index: number, item: ISelectItem): string {
    return item.value;
  }

}
