import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private url = environment.baseUrl + 'api/languages'

  constructor(private http: HttpClient) { }

  index(): Observable<Language[]> {
    return this.http.get<Language[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('LanguageService.index(): error retrieving language: ' + err)
        );
      })
    );
  }
}
