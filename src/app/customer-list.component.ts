import { Component, Input } from "@angular/core";

@Component({
  selector: "customers-list",
  template: `
    <list
     [items]="items"
     [itemsPerPage]="2"
     [currentPage]="currentPage"
    >
     <ng-template #item let-item="item">
       <customer
        (selected)="selected($event)"
        (unselected)="unselected($event)"
        [item]="item"
        [isSelected]="isItemSelected(item)"
       ></customer>
     </ng-template>
    </list>
 
    <pagination
     [currentPage]="currentPage"
     [itemsLength]="items.length"
     [itemsPerPage]="2"
     (pageChanged)="currentPage = $event"
    ></pagination>
`
})
export class CustomersListComponent {
  @Input() items = [];
  
  currentPage = 0;
  selectedItems = [];
  
  selected(item) {
    this.selectedItems = [...this.selectedItems, item];
  }
  unselected(item) {
    this.selectedItems = this.selectedItems.filter(({ value }) => value !== item.value);
  }
  isItemSelected(item) {
    return this.selectedItems.some(({ value }) => item.value === value);
  }

}