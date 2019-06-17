import { ActionReducerMap } from '@ngrx/store';

import * as fromAvailableTables from './available-tables/store/available-tables.reducer';

import { AvailableTableState } from './available-tables/store/available-tables.interface';


export interface AppState {
  availableTables: AvailableTableState;
}

export const reducers: ActionReducerMap<AppState> = {
  availableTables: fromAvailableTables.reducer,
};
