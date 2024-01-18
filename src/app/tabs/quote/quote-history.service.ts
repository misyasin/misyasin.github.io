import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteHistoryService {

  private apiUrl = 'http://localhost:1234'; // Update the URL to match your backend API

  constructor(private http: HttpClient) { }

  getQuoteHistory(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get/history/${userId}`);
  }
}