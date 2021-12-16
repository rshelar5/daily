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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  currentValue: string | any;
  addNew(newEntry: any) {
    this.dataSource.unshift(newEntry.value);
    newEntry.value = '';
  }
  dataSource = ['aaa', 'bbb', 'ccc'];
  ngOnInit(): void {}
}
