import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableTable, TablesStatus } from '@app/available-tables/store/available-tables.interface';
import { AvailableTablesStore } from '@app/available-tables/store/available-tables.store';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  availableTables$: Observable<AvailableTable[]>;
  reservedTables$: Observable<AvailableTable[]>;
  cleaningTables$: Observable<AvailableTable[]>;
  totalReservedSeats$: Observable<number>;
  allTables$: Observable<AvailableTable[]>;

  constructor(private router: Router, private tablesStore: AvailableTablesStore) { }

  ngOnInit() {
    this.allTables$ = this.tablesStore.allTables$;
    this.availableTables$ = this.tablesStore.availableTables$;
    this.reservedTables$ = this.tablesStore.reservedTables$;
    this.cleaningTables$ = this.tablesStore.cleaningTables$;
    this.setTotalReservedSeatCountObservable();
  }

  private setTotalReservedSeatCountObservable() {
    this.totalReservedSeats$ = this.reservedTables$.pipe(map(tables => {
      return this.getSeatCount(tables);
    }));
  }

  private getSeatCount(tables: AvailableTable[]): number {
    let totalCount = 0;
    tables.map(table => totalCount = totalCount + table.totalGuest);
    return totalCount;
  }

  addTable() {
    const newTable: AvailableTable = {
      id: Guid.create().toString(),
      tableStatus: TablesStatus.available,
      totalGuest: 0,
      totalSeats: 4,
      tableNumber: 0
    };
    this.tablesStore.addTables(newTable);
  }

  cancelNavBack() {
    this.router.navigate(['/']);
  }

  reserveTable(table: AvailableTable) {
    const reservedTable: AvailableTable = {
      ...table,
      tableStatus: TablesStatus.reserved,
      totalGuest: 4
    };
    this.tablesStore.updateTables(reservedTable);
  }

  makeAvailable(table: AvailableTable) {
    const reservedTable: AvailableTable = {
      ...table,
      tableStatus: TablesStatus.available,
      totalGuest: 0
    };
    this.tablesStore.updateTables(reservedTable);
  }

  cleanTable(table: AvailableTable) {
    const reservedTable: AvailableTable = {
      ...table,
      tableStatus: TablesStatus.cleaning,
      totalGuest: 0
    };
    this.tablesStore.updateTables(reservedTable);
  }

}
