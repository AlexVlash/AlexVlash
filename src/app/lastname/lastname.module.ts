import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { LastnameRoutingModule } from './lastname-routing.module';
import { LastnameComponent } from './lastname.component';


@NgModule({
  declarations: [LastnameComponent],
  imports: [
    CommonModule,
    LastnameRoutingModule,
    FormsModule
  ]
})
export class LastnameModule { }
