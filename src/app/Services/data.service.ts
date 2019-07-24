import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  STORAGE_KEY = 'local_todolist';
  database;
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    public db: AngularFirestore
  ) {}
  saveFavorite(item): void {
    const savedItemList = this.storage.get(this.STORAGE_KEY) || [];

    savedItemList.push({
      item: item
    });
    this.storage.set(this.STORAGE_KEY, savedItemList);
  }
  getHomeData() {
    return this.db.collection('home').snapshotChanges();
  }
}
