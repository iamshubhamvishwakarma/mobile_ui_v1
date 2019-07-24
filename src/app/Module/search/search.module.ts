import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../Component/search/search.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UtilityService } from 'src/app/Services/utility.service';
import { MatListModule } from '@angular/material/list';
import { SearchService } from 'src/app/Services/search.service';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatListModule
  ],
  providers: [UtilityService, SearchService]
})
export class SearchModule {}
