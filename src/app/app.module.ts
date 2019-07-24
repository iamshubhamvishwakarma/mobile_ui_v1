import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatBottomSheetModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatRippleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatCheckboxModule,
  MatGridListModule,
  MatMenuModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { SlideshowComponent } from './Component/slideshow/slideshow.component';
import { SlideComponent } from './Component/slide/slide.component';
import { CategoryComponent } from './Component/Categories/category/category.component';

import { HorizontalListComponent } from './Component/horizontal-list/horizontal-list.component';
import { CatItemComponent } from './Component/cat-item/cat-item.component';
import { GridDealsComponent } from './Component/grid-deals/grid-deals.component';
import { GridDealsItemComponent } from './Component/grid-deals-item/grid-deals-item.component';
import { SingleBannerComponent } from './Component/single-banner/single-banner.component';

import { LoginComponent } from './Component/Login/login/login.component';
import { LoginBottomSheetComponent } from './Component/Login/login-bottom-sheet/login-bottom-sheet.component';
import { JoinSocialComponent } from './Component/join-social/join-social.component';
import { HorizontalDealsComponent } from './Component/horizontal-deals/horizontal-deals.component';
import { HorizontalDealItemsComponent } from './Component/horizontal-deals/horizontal-deal-items/horizontal-deal-items.component';
import { ViewAllComponent } from './Component/view-all/view-all.component';
import { ViewAllItemComponent } from './Component/view-all/view-all-item/view-all-item.component';
import { AngularFireModule } from '@angular/fire';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchModule } from './Module/search/search.module';
import { UtilityService } from './Services/utility.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { DataService } from './Services/data.service';
import { LoginBoxComponent } from './Component/Login/login-box/login-box.component';
import { CashbackBySitesComponent } from './Component/cashback-by-sites/cashback-by-sites.component';
import { CashbackBySitesItemComponent } from './Component/cashback-by-sites/cashback-by-sites-item/cashback-by-sites-item.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SlideshowComponent,
    SlideComponent,
    CategoryComponent,

    HorizontalListComponent,
    CatItemComponent,
    GridDealsComponent,
    GridDealsItemComponent,
    SingleBannerComponent,
    LoginComponent,
    LoginBottomSheetComponent,
    JoinSocialComponent,
    HorizontalDealsComponent,
    HorizontalDealItemsComponent,
    ViewAllComponent,
    ViewAllItemComponent,
    LoginBoxComponent,
    CashbackBySitesComponent,
    CashbackBySitesItemComponent
  ],
  imports: [
    AngularFirestoreModule,
    OverlayModule,
    HttpClientModule,
    SearchModule,
    NgbModule.forRoot(),
    MatBottomSheetModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    ScrollingModule,
    MatGridListModule,
    MatMenuModule,
    StorageServiceModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAy5WZZK8LAneLgYj5aG9YhT4N8s0qdL2Y',
      authDomain: 'myamzo.firebaseapp.com',
      databaseURL: 'https://myamzo.firebaseio.com',
      projectId: 'myamzo',
      storageBucket: 'myamzo.appspot.com',
      messagingSenderId: '773093693206',
      appId: '1:773093693206:web:46103448c1e24305'
    }),

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [LoginBottomSheetComponent],
  providers: [UtilityService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
