import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private palavra$ = new BehaviorSubject<any>({});
  private dificuldade$ = new BehaviorSubject<any>({});

  palavraEscolhida$ = this.palavra$.asObservable();
  dificuldadeEscolhida$ = this.dificuldade$.asObservable();

  constructor() {}

  setPalavra(palavra: any) {
    this.palavra$.next(palavra);
  }

  setDificuldade(dificuldade: any) {
    this.dificuldade$.next(dificuldade);
  }
}
