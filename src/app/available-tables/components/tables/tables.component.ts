import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AvailableTable } from '@app/available-tables/store/available-tables.interface';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() allTables: AvailableTable[] = [];
  @Output() emitAddTable = new EventEmitter<void>();
  @Output() emitReserveTable = new EventEmitter<AvailableTable>();
  @Output() emitCleanTable = new EventEmitter<AvailableTable>();
  @Output() emitMakeAvailableTable = new EventEmitter<AvailableTable>();

  constructor() { }

  ngOnInit() {
  }

  addTable() {
    this.emitAddTable.emit();
  }

  reserveTable(table: AvailableTable) {
    this.emitReserveTable.emit(table);
  }

  makeAvailable(table: AvailableTable) {
    this.emitMakeAvailableTable.emit(table);
  }

  cleanTable(table: AvailableTable) {
    this.emitCleanTable.emit(table);
  }

}
