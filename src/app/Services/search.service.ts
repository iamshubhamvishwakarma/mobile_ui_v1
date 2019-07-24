import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  BASE_URL = 'http://192.168.0.4:3000/api/search?query=';
  constructor(private db: AngularFirestore, private httpClient: HttpClient) {}
  getResults(query) {
    if (query === undefined || query === '') {
      return;
    }
    return this.httpClient.get(this.BASE_URL + query, {
      headers: this.getHeaders()
    });
  }
  getHistory() {
    return [
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5',
      'redmi note 5'
    ];
  }

  getHeaders() {
    const tokenHeader = new HttpHeaders({
      Authorization: `toekn`
    });
    return tokenHeader;
  }
}
