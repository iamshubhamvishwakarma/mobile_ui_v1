import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ViewAllComponent } from './Component/view-all/view-all.component';
import { SearchComponent } from './Component/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewall/:cat', component: ViewAllComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
