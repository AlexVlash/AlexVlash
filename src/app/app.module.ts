import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstnameComponent } from './firstname/firstname.component';
import { LastnameComponent } from './lastname/lastname.component';
import { EyecolorComponent } from './eyecolor/eyecolor.component';

export const appRoutes: Routes = [
  {
    path: 'firstname',
    component: FirstnameComponent
  },
  {
    path: 'lastname',
    component: LastnameComponent
  },
  {
    path: 'eyecolor',
    component: EyecolorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstnameComponent,
    LastnameComponent,
    EyecolorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
