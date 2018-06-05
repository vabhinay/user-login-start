import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class EmployeeModule { }
