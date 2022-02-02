import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

const item = [
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule
]

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: item
})
export class MaterialModule { }
