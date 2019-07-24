import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilityService } from 'src/app/Services/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/Services/search.service';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;
  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  data = [];
  lastIndex = 0;
  constructor(
    private db: AngularFirestore,
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );

    this.infinite = batchMap.pipe(map(v => Object.values(v)));
  }
  getBatch(offset) {
    console.log(offset);
    return this.db
      .collection('peoples', ref =>
        ref
          .orderBy('name')
          .startAfter(offset)
          .limit(this.batch)
      )
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            return { ...acc, [id]: data };
          }, {});
        })
      );
    console.log(this.infinite);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cat = params.get('cat');
      console.log(params, this.route.snapshot.queryParamMap);
      if (cat && cat !== undefined && cat === 'search') {
        const query = this.route.snapshot.queryParamMap.get('query');
        this.searchService.getResults(query).subscribe(response => {
          console.log(JSON.stringify(response));
          this.data = Object.keys(response).map(i => response[i]);
          console.log(this.data);
        });
      }
    });
  }
  nextBatch($event, offset) {
    if (this.theEnd) {
      return;
    }

    if (
      this.lastIndex > $event &&
      this.utilityService.isSearchVisible === false
    ) {
      this.utilityService.showSearch('view all');
    } else if (
      this.lastIndex < $event &&
      this.utilityService.isSearchVisible === true
    ) {
      this.utilityService.hideSearch('view all');
    }
    console.log($event);
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      this.offset.next(offset);
    }
    this.lastIndex = $event;
  }

  trackByIdx(i) {
    return i;
  }
}
