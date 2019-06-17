import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AvailableTablesRoutingModule } from './available-tables.routing.module';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashboardStatusComponent } from './components/dashboard-status/dashboard-status.component';
import { ServerStatusComponent } from './components/dashboard-status/server-status/server-status.component';
import { BusserStatusComponent } from './components/dashboard-status/busser-status/busser-status.component';
import { CashflowStatusComponent } from './components/dashboard-status/cashflow-status/cashflow-status.component';
import { TablesComponent } from './components/tables/tables.component';
import { TableDetailsComponent } from './components/tables/table-details/table-details.component';
import { GeneralStatusComponent } from './components/dashboard-status/general-status/general-status.component';

@NgModule({
  declarations: [DashboardComponent, DashboardStatusComponent, ServerStatusComponent, BusserStatusComponent, CashflowStatusComponent, TablesComponent, TableDetailsComponent, GeneralStatusComponent],
  imports: [
    AvailableTablesRoutingModule, SharedModule
  ]
})
export class AvailableTablesModule { }
