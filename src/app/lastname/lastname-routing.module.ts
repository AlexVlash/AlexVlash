import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastnameComponent } from './lastname.component';

const routes: Routes = [{ path: '', component: LastnameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastnameRoutingModule { }
