import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'lastname',
      loadChildren: () => import('./lastname/lastname.module').then(m => m.LastnameModule)
    },

    {
      path: 'eyecolor',
      loadChildren: () => import('./eyecolor/eyecolor.module').then(m => m.EyecolorModule)
    },

    { path: 'firstname',
      loadChildren: () => import('./firstname/firstname.module').then(m => m.FirstnameModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
