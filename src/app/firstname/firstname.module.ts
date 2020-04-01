import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FirstnameRoutingModule } from './firstname-routing.module';
import { FirstnameComponent } from './firstname.component';


@NgModule({
  declarations: [FirstnameComponent],
  imports: [
    CommonModule,
    FirstnameRoutingModule,
    FormsModule
  ]
})
export class FirstnameModule { }
