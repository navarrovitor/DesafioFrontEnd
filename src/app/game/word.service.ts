import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError, map, min } from 'rxjs';
import { IWord } from './word';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private wordUrl = 'api/words/words.json';
  constructor(private http: HttpClient) {}

  getWords(): Observable<IWord[]> {
    return this.http.get<IWord[]>(this.wordUrl).pipe(
      tap((data) => console.log('Palavras:\n', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getWord(): Observable<IWord | undefined> {
    let min = 1,
      max = 4;
    let id: number = Math.random() * (max - min) + min;
    return this.getWords().pipe(
      map((words: IWord[]) => words.find((p) => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = `Ah não, o erro '${err.error.message}' aconteceu`;
    } else {
      message = `Eita, recebemos o código ${err.status}, a mensagem de erro é: ${err.message}`;
    }
    console.error(message);
    return throwError(() => message);
  }
}
