import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatCheckboxModule,MatButtonModule],
  exports: [CommonModule, MatInputModule,MatCheckboxModule ,MatButtonModule]
})
export class MaterialModule {}
