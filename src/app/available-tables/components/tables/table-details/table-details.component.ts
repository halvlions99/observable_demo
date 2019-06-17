import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AvailableTable, TablesStatus } from '@app/available-tables/store/available-tables.interface';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  @Input() table: AvailableTable;
  @Output() emitReserveTable = new EventEmitter<AvailableTable>();
  @Output() emitCleanTable = new EventEmitter<AvailableTable>();
  @Output() emitMakeAvailableTable = new EventEmitter<AvailableTable>();

  constructor() {}

  ngOnInit() {}

  get getbackgroundColor() {
    switch (this.table.tableStatus) {
      case TablesStatus.available:
        return 'darkseagreen';
      case TablesStatus.cleaning:
        return 'khaki';
      case TablesStatus.reserved:
        return 'gray';
    }
  }

  reserveTable() {
    this.emitReserveTable.emit(this.table);
  }

  makeAvailable() {
    this.emitMakeAvailableTable.emit(this.table);
  }

  cleanTable() {
    this.emitCleanTable.emit(this.table);
  }
}
