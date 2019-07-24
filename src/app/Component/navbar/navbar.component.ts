import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { UtilityService } from 'src/app/Services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @Output() navAction = new EventEmitter();
  constructor(private utilityService: UtilityService, private router: Router) {}
  value = '';
  isVisible = true;
  ngOnInit() {
    // this.utilityService.currentSearchState.subscribe(msg => {
    //   this.isVisible = msg;
    //   console.log(this.isVisible);
    // });
  }

  searchClick() {
    // this.utilityService.hideSearch();
    this.router.navigateByUrl('/search');
  }

  navClicked() {
    this.navAction.emit('true');
  }
}
