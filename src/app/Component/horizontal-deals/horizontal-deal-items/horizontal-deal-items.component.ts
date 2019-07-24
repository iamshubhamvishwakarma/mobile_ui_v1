import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-deal-items',
  templateUrl: './horizontal-deal-items.component.html',
  styleUrls: ['./horizontal-deal-items.component.scss']
})
export class HorizontalDealItemsComponent implements OnInit {
  @Input()
  deal;
  constructor() {}

  ngOnInit() {
    if (this.deal) {
      console.log(this.deal);
    }
  }
}
