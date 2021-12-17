import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatCheckboxModule],
  exports: [MatInputModule,MatCheckboxModule]
})
export class MaterialModule {}
