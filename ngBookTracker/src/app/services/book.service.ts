import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../models/book';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = environment.baseUrl + 'api/books'

  constructor(private http: HttpClient) { }


  index(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BookService.index(): error retrieving book: ' + err)
        );
      })
    );
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'BookService.create(): error creating Book: ' + err )
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    const deleteUrl = `${this.url}/${id}`;
    return this.http.delete<void>(deleteUrl).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(
           () => new Error( 'BookService.create(): error creating Book: ' + error )
        );
      })
    );
  }

  update(book: Book): Observable<Book> {
    const updateUrl = `${this.url}/${book.id}`;
    return this.http.put<Book>(updateUrl, book).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(
           () => new Error( 'BookService.update(): error updating Book: ' + error )
        );
      })
    );
  }

  show(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'BookService.show(): error showing Book: ' + err )
        );
      })
    );
  }


}
