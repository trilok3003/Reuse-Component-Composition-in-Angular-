import { Input } from '@angular/core';
import { Item } from './item';

export abstract class ListComponent {
  @Input() items: Item[];
}