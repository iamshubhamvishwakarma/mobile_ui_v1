import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  @Input() slideData;

  slides = [{ title: 'First slide', image: '', id: '', url: '' }];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  @ViewChild('carousel', { static: false })
  carousel: any;
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {}
  onSwipeLeft($event) {
    this.carousel.prev();
  }
  onSwipeRight($event) {
    this.carousel.next();
  }
  openLink(param) {
    console.log(param);
  }
}
