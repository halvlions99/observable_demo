import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AvailableTable, TablesStatus } from './available-tables.interface';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AvailableTableStoreService {
  constructor() {}

  // ********************************************************************************** //
  // Store/State elements
  // ********************************************************************************** //
  private readonly allTablesSubject = new BehaviorSubject<AvailableTable[]>([]);

  // ********************************************************************************** //
  // Selectors
  // ********************************************************************************** //
  readonly allTables$ = this.allTablesSubject.asObservable();
  readonly availableTables$ = this.allTables$.pipe(map(tables => this.mapTablesByStatus(tables, TablesStatus.available)));
  readonly reservedTables$ = this.allTables$.pipe(map(tables => this.mapTablesByStatus(tables, TablesStatus.reserved)));
  readonly cleaningTables$ = this.allTables$.pipe(map(tables => this.mapTablesByStatus(tables, TablesStatus.cleaning)));

  // ********************************************************************************** //
  // Getters and Setters
  // ********************************************************************************** //
  protected get allTables(): AvailableTable[] {
    return this.allTablesSubject.value;
  }

  protected set allTables(val: AvailableTable[]) {
    this.allTablesSubject.next(val);
  }

  // ********************************************************************************** //
  // Store methods private and public
  // ********************************************************************************** //
  private mapTablesByStatus(tables: AvailableTable[], status: TablesStatus): AvailableTable[] {
    return tables.filter(table => table.tableStatus === status);
  }

  addTables(table: AvailableTable) {
    const currentTables = this.allTables;
    currentTables.push({
      ...table,
      tableNumber: this.allTables.length + 1
    });
    this.allTables = currentTables;
  }

  removeTables(tableId: string) {
    this.allTables = this.allTables.filter(tables => tables.id !== tableId);
  }

  updateTables(table: AvailableTable) {
    const currentTables = this.allTables;
    const tableIndex = currentTables.findIndex(item => item.id === table.id);
    if (tableIndex >= 0) {
      currentTables[tableIndex] = table;
    }
    this.allTables = currentTables;
  }
}
