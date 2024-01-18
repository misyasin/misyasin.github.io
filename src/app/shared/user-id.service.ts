import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  private userIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private userId: string;

  constructor() {}

  getUserId(): string {
    return this.userId;
  }

  setUserId(userId: string): void {
    this.userId = userId;
    this.userIdSubject.next(userId); // Notify subscribers when user ID changes
    console.log('UserIdService - UserId set:', this.userId);
  }

  getUserIdObservable(): Observable<string> {
    return this.userIdSubject.asObservable();
  }
}