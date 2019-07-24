import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-item',
  templateUrl: './view-all-item.component.html',
  styleUrls: ['./view-all-item.component.scss']
})
export class ViewAllItemComponent implements OnInit {
  @Input() item;
  constructor() {}

  ngOnInit() {}
  saveThis(parms) {}
  openLink(parms) {}
}
