import { Component, OnInit } from '@angular/core';
import { IWord } from './word';

@Component({
  selector: 'gg-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  dicionario: string[] = ['BANANA', 'AVESTRUZ', 'MACACO', 'COMPUTADOR'];
  palavra: IWord = { inteira: '', separada: [], acertadas: [] };
  tamanhoPalavra: number = 0;
  chutes: number = 50;
  erros: string[] = [];

  ngOnInit(): void {
    this.initializeIWord();
    this.getWord();
  }

  initializeIWord() {
    this.palavra.inteira =
      this.dicionario[
        Math.floor(Math.random() * this.dicionario.length - 1) + 1
      ];
    this.palavra.separada = this.palavra.inteira.split('');
    this.palavra.acertadas = new Array(this.palavra.separada.length).fill(
      false
    );
  }

  getWord() {
    this.tamanhoPalavra = this.palavra.separada.length;
    this.chutes = this.tamanhoPalavra * 2;
  }

  confereLetra(letra: string) {
    letra = letra.toUpperCase();
    const indices = [
      ...this.palavra.inteira.matchAll(new RegExp(letra, 'gi')),
    ].map((a) => a.index);
    if (indices.length === 0) {
      if (!this.erros.includes(letra)) {
        this.erros.push(letra);
      }
      if (--this.chutes === 0) {
        console.log('xiiii');
      }
    } else {
      indices.forEach((i) => {
        this.palavra.acertadas[Number(i)] = true;
      });
    }
  }
}
