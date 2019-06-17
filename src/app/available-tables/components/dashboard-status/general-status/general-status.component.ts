import { Component, OnInit, Input } from '@angular/core';
import { AvailableTable } from '../../../store/available-tables.interface';

@Component({
  selector: 'app-general-status',
  templateUrl: './general-status.component.html',
  styleUrls: ['./general-status.component.scss']
})
export class GeneralStatusComponent implements OnInit {

  @Input() allTables: AvailableTable[] = [];
  @Input() availableTables: AvailableTable[] = [];
  @Input() reservedTables: AvailableTable[] = [];
  @Input() cleaningTables: AvailableTable[] = [];
  @Input() totalSeatsOccupied = 0;

  constructor() { }

  ngOnInit() {
  }

}
