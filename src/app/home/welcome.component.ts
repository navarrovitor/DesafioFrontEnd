import { Component } from '@angular/core';
import { WordService } from '../game/word.service';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  public title = 'Bem vindo!';
  public levels = ['Fácil', 'Médio', 'Difícil'];
  public newGame = false;

  constructor(private wordService: WordService) {}

  setDificuldade(dificuldade: any) {
    this.wordService.setDificuldade(dificuldade);
  }
}
