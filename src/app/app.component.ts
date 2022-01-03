import { Component, VERSION } from '@angular/core';
import { CustomersListComponent } from './customer-list.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends CustomersListComponent {
  name = 'Angular ' + VERSION.major;
  items = [
    { value: 'helooo', display: 'world' },
    { value: 'helooo', display: 'world 1' },
    { value: 'helooo', display: 'world 2' },
    { value: 'helooo', display: 'world 3' },
    { value: 'helooo', display: 'world 4' },
    { value: 'helooo', display: 'world' },
    { value: 'helooo', display: 'world 1' },
    { value: 'helooo', display: 'world 2' },
    { value: 'helooo', display: 'world 3' },
    { value: 'helooo', display: 'world 4' },
  ];
}
