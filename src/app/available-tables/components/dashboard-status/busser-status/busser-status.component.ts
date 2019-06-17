import { Component, OnInit, Input } from '@angular/core';
import { AvailableTable } from '../../../../available-tables/store/available-tables.interface';

@Component({
  selector: 'app-busser-status',
  templateUrl: './busser-status.component.html',
  styleUrls: ['./busser-status.component.scss']
})
export class BusserStatusComponent implements OnInit {
  @Input() cleaningTables: AvailableTable[] = [];

  constructor() { }

  ngOnInit() {
  }

  get getBussersNeeded() {
    if (this.cleaningTables.length === 0) {
      return 0;
    }
    return Math.ceil(this.cleaningTables.length / 4);
  }

}
