import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'list',
  template: `
    <div *ngFor="let item of items | slice : start : end">
      <ng-container 
       *ngTemplateOutlet="template; context: { item: item }"
      >
      </ng-container>
    </div>
`,
})
export class ListComponent {
  @Input() items: Item[] = [];
  @Input() itemsPerPage = 2;
  @Input() currentPage: number;

  @ContentChild('item', { static: false })
  template: TemplateRef<any>;
  get start() {
    return this.currentPage * this.itemsPerPage;
  }
  get end() {
    return this.currentPage * this.itemsPerPage + this.itemsPerPage;
  }
}
