import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardIconService {
  private jsonUrl = 'assets/data/data.json';
  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
