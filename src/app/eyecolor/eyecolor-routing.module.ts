import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EyecolorComponent } from './eyecolor.component';

const routes: Routes = [{ path: '', component: EyecolorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EyecolorRoutingModule { }
