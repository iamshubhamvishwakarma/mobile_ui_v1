import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-deals',
  templateUrl: './horizontal-deals.component.html',
  styleUrls: ['./horizontal-deals.component.scss']
})
export class HorizontalDealsComponent implements OnInit {
  @Input()
  data;

  constructor() {}

  ngOnInit() {}
}
