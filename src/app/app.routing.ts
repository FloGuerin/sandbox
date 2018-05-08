import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules } from '@angular/router';
// Layouts
import {LayoutComponent} from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
