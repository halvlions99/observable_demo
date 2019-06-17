import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-main-conent',
  templateUrl: './toolbar-main-conent.component.html',
  styleUrls: ['./toolbar-main-conent.component.scss']
})
export class ToolbarMainConentComponent implements OnInit {
  title = 'Smoke House Grill';
  constructor(
  ) {}

  ngOnInit() {
  }


}
