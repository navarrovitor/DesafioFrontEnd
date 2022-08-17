import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gg-word',
  templateUrl: './word.component.html',
})
export class WordComponent implements OnInit {
  errorMessage: string = '';
  palavras: string[] = ['Banana', 'Avestruz', 'Macaco', 'Computador'];
  palavra: string[] = [''];
  tamanhoPalavra: number = 0;
  chutes: number = 0;

  constructor() {}

  ngOnInit(): void {
    const id = Math.floor(Math.random() * this.palavras.length - 1) + 1;
    this.palavra = this.palavras[id].split('');
    this.getWord();
  }
  getWord() {
    this.tamanhoPalavra = this.palavra.length;
    this.chutes = this.tamanhoPalavra * 2;
  }
}
