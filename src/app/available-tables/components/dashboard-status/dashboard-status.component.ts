import { Component, OnInit, Input } from '@angular/core';
import { AvailableTable } from '@app/available-tables/store/available-tables.interface';

@Component({
  selector: 'app-dashboard-status',
  templateUrl: './dashboard-status.component.html',
  styleUrls: ['./dashboard-status.component.scss']
})
export class DashboardStatusComponent implements OnInit {

  @Input() allTables: AvailableTable[] = [];
  @Input() availableTables: AvailableTable[] = [];
  @Input() reservedTables: AvailableTable[] = [];
  @Input() cleaningTables: AvailableTable[] = [];
  @Input() totalSeatsOccupied = 0;

  constructor() { }

  ngOnInit() {
  }

}
