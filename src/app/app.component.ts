import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UtilityService } from './Services/utility.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  title = 'app';
  selectedValue = '';
  myColor = '#6c5ce7';
  items = [
    { value: '0', view: 'zero' },
    { value: '1', view: 'one' },
    { value: '2', view: 'Two' }
  ];
  reason = '';
  isVisible = true;
  constructor(
    private utilityService: UtilityService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.utilityService.currentSearchState.subscribe(msg => {
      this.isVisible = msg.isVisible;
      console.log(this.isVisible, 'from', msg.source);
      this.cd.detectChanges();
    });
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  toggleSideNav($event) {
    this.sidenav.open();
  }
  scrollHandler($event) {
    console.log($event);
  }
}
