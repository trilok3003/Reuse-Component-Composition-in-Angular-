import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list.component';
import { PaginationComponent } from './pagination.component';
import { CustomerComponent } from './customer.component';
import { CustomersListComponent } from './customer-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,
    ListComponent, PaginationComponent, CustomerComponent, CustomersListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
