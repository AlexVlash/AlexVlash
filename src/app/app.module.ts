import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstnameComponent } from './firstname/firstname.component';
import { LastnameComponent } from './lastname/lastname.component';
import { EyecolorComponent } from './eyecolor/eyecolor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

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
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstnameComponent,
    LastnameComponent,
    EyecolorComponent,
    FooterComponent,
    HeaderComponent,
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
