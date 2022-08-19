import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private palavra$ = new BehaviorSubject<any>({});
  palavraEscolhida$ = this.palavra$.asObservable();
  constructor() {}

  setPalavra(palavra: any) {
    this.palavra$.next(palavra);
  }
}
