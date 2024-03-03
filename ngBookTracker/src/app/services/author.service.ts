import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Author } from '../models/author';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = environment.baseUrl + 'api/authors'

  constructor(private http: HttpClient) { }

  index(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('AuthorService.index(): error retrieving author: ' + err)
        );
      })
    );
  }
}
