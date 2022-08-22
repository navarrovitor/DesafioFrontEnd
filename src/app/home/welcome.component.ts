import { Component } from '@angular/core';
import { WordService } from '../game/word.service';
import { Levels } from '../shared/levels.enum';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  public title = 'Bem vindo!';
  public niveis = Object.values(Levels).slice(0, Object.values(Levels).length / 2);
  public newGame = false;

  constructor(private wordService: WordService) {}

  setPalavra(dificuldade: any) {
    this.wordService.setPalavra(dificuldade);
  }
}
