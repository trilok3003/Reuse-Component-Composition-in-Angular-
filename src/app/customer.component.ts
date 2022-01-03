import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'customer',
  template: ` 
    <label>
      <input
        type="checkbox"
        [checked]="isSelected"
        (change)="onChange($event)"
      />
      {{ item.display }}
   </label>
`,
})
export class CustomerComponent {
  @Input() item: Item;
  @Input() isSelected: boolean;
  @Output() selected = new EventEmitter<Item>();
  @Output() unselected = new EventEmitter<Item>();
  onChange(e) {
    e.target.checked
      ? this.selected.emit(this.item)
      : this.unselected.emit(this.item);
  }
}
