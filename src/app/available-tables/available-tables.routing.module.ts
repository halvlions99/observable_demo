import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureLayoutComponent } from '@shared/app-layouts/secure-main-layout/containers/layout/secure-layout.component';

import { DashboardComponent } from './container/dashboard/dashboard.component';

const tableRoutes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(tableRoutes)
  ],
  exports: [RouterModule]
})
export class AvailableTablesRoutingModule { }
