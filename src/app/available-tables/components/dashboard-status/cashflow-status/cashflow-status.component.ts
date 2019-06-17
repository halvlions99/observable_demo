import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cashflow-status',
  templateUrl: './cashflow-status.component.html',
  styleUrls: ['./cashflow-status.component.scss']
})
export class CashflowStatusComponent implements OnInit {
  @Input() seatCount = 0;

  constructor() { }

  ngOnInit() {
  }

  get getCashflow() {
    if (this.seatCount === 0) {
      return 0;
    }
    return this.seatCount * 10;
  }

}
