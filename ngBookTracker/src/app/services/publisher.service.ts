import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Language } from '../models/language';
import { Observable, catchError, throwError } from 'rxjs';
import { Publisher } from '../models/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private url = environment.baseUrl + 'api/publishers'

  constructor(private http: HttpClient) { }

  index(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('PublisherService.index(): error retrieving publisher: ' + err)
        );
      })
    );
  }
}
