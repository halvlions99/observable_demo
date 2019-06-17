import { AvailableTableState, TablesStatus } from './available-tables.interface';

export const getAllTables = (state: AvailableTableState) =>
  state.availableTables ? state.availableTables : [];
export const getAvailableTables = (state: AvailableTableState) =>
  state.availableTables ? state.availableTables.filter(table => table.tableStatus === TablesStatus.available) : [];
export const getReservedTables = (state: AvailableTableState) =>
  state.availableTables ? state.availableTables.filter(table => table.tableStatus === TablesStatus.reserved) : [];
export const getCleaningTables = (state: AvailableTableState) =>
  state.availableTables ? state.availableTables.filter(table => table.tableStatus === TablesStatus.cleaning) : [];
