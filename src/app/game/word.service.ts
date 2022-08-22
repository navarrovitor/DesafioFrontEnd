import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as dicionarios from '../_files/dicionario.json';
import { Levels } from '../shared/levels.enum';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private palavra$ = new BehaviorSubject<any>({});
  dicionario: string[][] = dicionarios;

  palavraEscolhida$ = this.palavra$.asObservable();

  constructor() {}

  // Com o input recebido pelo clique do botão de dificuldade na tela inicial,
  // determina a palavra do jogo atual
  setPalavra(dificuldade: any) {
    // Determina o dicionário que será usado de acordo
    // com os índices 0, 1 e 2 determinados no enumerável "levels"
    const dic: String[] =
      this.dicionario[Object.values(Levels).indexOf(dificuldade)];

    // Escolhe uma palavra aleatória do dicionário escolhido
    const palavra = dic[Math.floor(Math.random() * dic.length - 1) + 1];

    // Determina o número de chutes para tentar acertar a palavra
    const chutes = palavra.length * this.setChutes(dificuldade);
    this.palavra$.next([palavra, chutes]);
  }

  // Determina o número de chutes de acordo com a dificuldade. Se for fácil, é o
  // número de letras * 3, se médio é esse número * 2 e se difícil, * 1
  setChutes(dificuldade: string): number {
    switch (dificuldade) {
      case 'Fácil':
        return 3;
      case 'Médio':
        return 2;
      case 'Difícil':
        return 1;
      default:
        return -1;
    }
  }
}
