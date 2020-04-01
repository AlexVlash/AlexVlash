import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstnameComponent } from './firstname.component';

const routes: Routes = [{ path: '', component: FirstnameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstnameRoutingModule { }
