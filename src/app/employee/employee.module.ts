import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CONFIG_TOKEN } from '../config.service';
import { Config } from '../config';

export let CONFIG_VALUE: Config = {
  apiEndPoint: 'abc',
  production: true
}

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  providers: [
    { provide: CONFIG_TOKEN, useValue : CONFIG_VALUE }
  ]
})
export class EmployeeModule { }
