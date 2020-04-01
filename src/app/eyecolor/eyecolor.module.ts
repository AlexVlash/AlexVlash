import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { EyecolorRoutingModule } from './eyecolor-routing.module';
import { EyecolorComponent } from './eyecolor.component';


@NgModule({
  declarations: [EyecolorComponent],
  imports: [
    CommonModule,
    EyecolorRoutingModule,
    FormsModule
  ]
})
export class EyecolorModule { }
