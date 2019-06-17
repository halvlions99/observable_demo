import { Component, OnInit, Input } from '@angular/core';
import { AvailableTable } from '../../../store/available-tables.interface';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.scss']
})
export class ServerStatusComponent implements OnInit {
  @Input() reservedTables: AvailableTable[] = [];

  constructor() { }

  get getServersNeeded() {
    if (this.reservedTables.length === 0) {
      return 0;
    }
    return Math.ceil(this.reservedTables.length / 2);
  }

  ngOnInit() {
  }

}
