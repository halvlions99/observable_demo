import * as availableTableActions from './available-tables.actions';
import { AvailableTableState, AvailableTable } from './available-tables.interface';

export const initialAvailableTableState: AvailableTableState = {
  availableTables: []
};

export function reducer(state = initialAvailableTableState, action: availableTableActions.Actions): AvailableTableState {
  switch (action.type) {
    case availableTableActions.ActionTypes.ADD_TABLE:
      const allTables = state.availableTables ? state.availableTables : [];
      const newTable: AvailableTable = {
        ...action.payload,
        tableNumber: allTables.length + 1
      };
      state.availableTables.push(newTable);
      return {
        ...state,
        availableTables: sortAvailableTable(allTables)
      };
    case availableTableActions.ActionTypes.REMOVE_TABLE:
      return {
        ...state,
        availableTables: state.availableTables.filter(item => item.id !== action.payload)
      };
    case availableTableActions.ActionTypes.UPDATE_TABLE:
      const tableIndex = state.availableTables.findIndex(item => item.id === action.payload.id);
      const updateStateTables = state.availableTables;
      if (tableIndex >= 0) {
        updateStateTables[tableIndex] = action.payload;
      }
      return {
        ...state,
        availableTables: updateStateTables
      };
    default:
      return state;
  }
}

function sortAvailableTable(avlTable: AvailableTable[]): AvailableTable[] {
  return avlTable.sort((a, b) => a.tableNumber - b.tableNumber);
}
