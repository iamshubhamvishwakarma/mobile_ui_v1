import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/app/Services/utility.service';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  query = '';
  history = [];
  service;
  searchServiceSub;
  constructor(
    private utilityService: UtilityService,
    private _location: Location,
    private searchService: SearchService,
    private router: Router
  ) {}
  ngOnInit() {
    this.utilityService.hideSearch('from search ');
    this.history = this.searchService.getHistory();
    this.service = this._location.subscribe(x => {
      this.utilityService.showSearch('from search');
    });
  }

  back() {
    this.utilityService.showSearch('search component');
    this._location.back();
  }
  openVoiceWinodw() {}
  openHistory(item) {
    this.query = item;
    this.search();
  }
  search() {
    this.router
      .navigate(['/viewall/search'], { queryParams: { query: this.query } })
      .then(e => {
        if (e) {
          console.log('Navigation is successful!', e);
        } else {
          console.log('Navigation has failed!', e);
        }
      });
  }

  ngOnDestroy(): void {
    //  this.searchServiceSub.unsubscribe();
    this.service.unsubscribe();
  }
}
