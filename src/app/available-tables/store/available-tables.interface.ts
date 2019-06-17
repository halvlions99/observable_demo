
export enum TablesStatus {
  available = 'Available',
  reserved = 'Reserved',
  cleaning = 'Cleaning'
}

export interface AvailableTable {
  id: string;
  tableStatus: TablesStatus;
  totalGuest: number;
  totalSeats: number;
  tableNumber: number;
}

export interface AvailableTableState {
  availableTables: AvailableTable[];
}
