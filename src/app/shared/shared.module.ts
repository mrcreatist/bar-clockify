import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { component, service } from './declaration';



@NgModule({
  declarations: component,
  imports: [
    CommonModule
  ],
  exports: component,
  providers: service
})
export class SharedModule { }
