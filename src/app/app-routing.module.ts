import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SecureLayoutComponent } from '../app/shared/app-layouts/secure-main-layout/containers/layout/secure-layout.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SecureLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      }
    ]
  },
  {
    path: 'available-tables',
    loadChildren: () => import('./available-tables/available-tables.module').then(m => m.AvailableTablesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: false,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
