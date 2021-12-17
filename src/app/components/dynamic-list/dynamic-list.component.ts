import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { MatPseudoCheckbox } from '@angular/material/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
})
export class DynamicListComponent implements OnInit, OnChanges {
  constructor() {}
  dataSource = ['aaa', 'bbb', 'ccc'];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  currentValue: string | any;
  addNew(newEntry: any) {
    if (newEntry.value === undefined || newEntry.value === '')
      return;
    this.dataSource.unshift(newEntry.value);
    newEntry.value = '';
  }
  ngOnInit(): void {}
}
