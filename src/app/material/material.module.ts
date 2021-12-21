import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatCheckboxModule],
  exports: [CommonModule, MatInputModule,MatCheckboxModule ]
})
export class MaterialModule {}
