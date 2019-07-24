import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-horizontal-list",
  templateUrl: "./horizontal-list.component.html",
  styleUrls: ["./horizontal-list.component.scss"]
})
export class HorizontalListComponent implements OnInit {
  @ViewChild("horidiv", { static: true }) horiDiv: ElementRef;
  catitems = [1, 2, 3, 45, 5, 6, 7, 8, 9, 2, 3, 45, 5, 6];
  hideLeft = true;
  hideRight = false;
  constructor() {}

  ngOnInit() {}
  scrollRight() {
    console.log(this.horiDiv);
    let left = this.horiDiv.nativeElement.scrollLeft;
    this.horiDiv.nativeElement.scrollTo({
      left: left + 100,
      behavior: "smooth"
    });
    let width = this.horiDiv.nativeElement.scrollWidth;
    if (left < 10) {
      this.hideLeft = true;
    } else if (left + 306 == width) {
      this.hideRight = true;
    } else {
      this.hideLeft = false;
    }
    console.log(left, width);
  }

  scrollLeft() {
    console.log(this.horiDiv);
    let left = this.horiDiv.nativeElement.scrollLeft;
    this.horiDiv.nativeElement.scrollTo({
      left: left - 100,
      behavior: "smooth"
    });

    let width = this.horiDiv.nativeElement.scrollWidth;
    if (left - 100 < 10) {
      this.hideLeft = true;
    } else if (width > left + 306) {
      this.hideRight = false;
    }
    console.log(left, width);
  }
}
