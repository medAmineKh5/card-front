import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) {}

  getRandomCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/cards`);
  }

  sortCards(cards: Card[]): Observable<Card[]> {
    return this.http.post<Card[]>(`${this.apiUrl}/cards/sort`, cards);
  }
}
