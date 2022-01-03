import { Component, Input } from "@angular/core";

@Component({
  selector: "customers-list",
  template: `
  <div *ngFor="let item of items | slice: start : end">
  <label>
    <input
      type="checkbox"
      [checked]="isItemSelected(item)"
      (change)="
        $event.target.checked ? select(item) : unselect(item)
      "
    />
   {{ item.display }}
  </label>
 </div>
 <div class='pages'>
 <div *ngFor="let p of pages; let i = index;" 
      class='page' 
      [class.selected]="i === page" 
      (click)="changePage(i)"
  >
  {{ i }}
 </div>
</div>
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