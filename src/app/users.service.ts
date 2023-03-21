import { catchError, Observable, tap, throwError, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  sharedSubj = new Subject();
  get(username: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${username}`).pipe(
      tap(
        (resp) => {
          this.sharedSubj.next(resp);
        },
        (err) => {
          throwError(err);
        }
      )
    );
  }
}
