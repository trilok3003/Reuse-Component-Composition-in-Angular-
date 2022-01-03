import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListComponent } from './list.component';
export class PaginationComponent extends ListComponent {
  page = 0;
  itemsPerPage = 2;
  get start() {
   return this.page * this.itemsPerPage;
  }
  get end() {
   return this.page * this.itemsPerPage + this.itemsPerPage;
  }
  get pages() {
    return new Array(this.items.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.page = page;
  }
}
