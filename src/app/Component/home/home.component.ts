import { Component, OnInit, AfterContentInit } from '@angular/core';
import { UtilityService } from 'src/app/Services/utility.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home_data;
  constructor(private db: DataService) {}

  ngOnInit() {
    this.db.getHomeData().subscribe(data => {
      this.home_data = data[0].payload.doc.data();
      console.log(this.home_data);
    });
  }
}
