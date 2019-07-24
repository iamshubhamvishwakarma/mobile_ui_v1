import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private searchSource = new BehaviorSubject({
    source: 'service',
    isVisible: true
  });
  currentSearchState = this.searchSource.asObservable();

  private loaderSource = new BehaviorSubject(true);
  currentLoaderState = this.loaderSource.asObservable();

  constructor() {}

  isLoaderVisible = true;
  isSearchVisible = true;
  toggleSearch() {}
  hideSearch(param) {
    this.searchSource.next({ source: param, isVisible: false });
    this.isSearchVisible = false;
  }
  showSearch(param) {
    this.isSearchVisible = true;
    this.searchSource.next({ source: param, isVisible: true });
  }
  toggleLoader() {
    this.loaderSource.next((this.isLoaderVisible = !this.isLoaderVisible));
  }
}
