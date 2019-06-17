import { Injectable } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';

import * as actions from './available-tables.actions';
import * as selectors from './available-tables.selectors';

import { Observable } from 'rxjs';
import { AppState } from '@app/app.reducer';
import { AvailableTable } from './available-tables.interface';

export const getAvailableTablesState = (state: AppState) => state.availableTables;
export const getAllTables = createSelector(getAvailableTablesState, selectors.getAllTables);
export const getAvailableTables = createSelector(getAvailableTablesState, selectors.getAvailableTables);
export const getReservedTables = createSelector(getAvailableTablesState, selectors.getReservedTables);
export const getCleaningTables = createSelector(getAvailableTablesState, selectors.getCleaningTables);

@Injectable({ providedIn: 'root' })
export class AvailableTablesStore {
  allTables$: Observable<AvailableTable[]>;
  availableTables$: Observable<AvailableTable[]>;
  reservedTables$: Observable<AvailableTable[]>;
  cleaningTables$: Observable<AvailableTable[]>;

  constructor(private store: Store<AppState>) {
    this.allTables$ = this.store.pipe(select(getAllTables));
    this.availableTables$ = this.store.pipe(select(getAvailableTables));
    this.reservedTables$ = this.store.pipe(select(getReservedTables));
    this.cleaningTables$ = this.store.pipe(select(getCleaningTables));
  }

  addTables(table: AvailableTable) {
    this.store.dispatch(new actions.AddTable(table));
  }

  removeTables(tableId: string) {
    this.store.dispatch(new actions.RemoveTable(tableId));
  }

  updateTables(table: AvailableTable) {
    this.store.dispatch(new actions.UpdateTable(table));
  }

}
