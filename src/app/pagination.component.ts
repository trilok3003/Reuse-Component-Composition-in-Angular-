import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  template: `
  <div class="pages">
  <div *ngFor="let p of pages; let i = index"
   class="page"
   [class.selected]="i === currentPage"
   (click)="pageChanged.emit(i)" >
   {{ i }} 
  </div>
</div>`,
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() itemsPerPage = 2;
  @Input() itemsLength: number;

  @Output() pageChanged = new EventEmitter<number>();
  get pages() {
    return new Array(this.itemsLength / this.itemsPerPage);
  }
}
