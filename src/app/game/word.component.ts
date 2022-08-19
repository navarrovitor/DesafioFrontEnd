import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IWord } from './word';
import * as dicionario from '../_files/dicionario.json';
import { WordService } from './word.service';

@Component({
  selector: 'gg-word',
  templateUrl: './word.component.html',
})
export class WordComponent implements OnInit {
  // 
  dicionario: string[] = dicionario;
  palavra: IWord = { inteira: '', separada: [], acertadas: [] };
  tamanhoPalavra: number = 0;
  chutes: number = 50;
  erros: string[] = [];

  constructor(private router: Router, private wordService: WordService) {}

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
    this.wordService.setPalavra(this.palavra);
  }

  getWord() {
    this.tamanhoPalavra = this.palavra.separada.length;
    this.chutes = this.tamanhoPalavra * 2;
  }

  onSubmit(input: NgForm) {
    this.confereLetra(input.value.tentativa);
    input.resetForm();
  }

  confereLetra(letra: string) {
    if (
      !/^[a-zA-Z]+$/.test(letra) ||
      this.erros.includes(letra.toUpperCase())
    ) {
      alert('Você precisa inserir uma letra nova!');
      return;
    }
    letra = letra.toUpperCase();
    const indices = [
      ...this.palavra.inteira.matchAll(new RegExp(letra, 'gi')),
    ].map((a) => a.index);
    if (indices.length === 0) {
      if (!this.erros.includes(letra)) {
        this.erros.push(letra);
      }
      if (--this.chutes === 0) {
        this.fimDeJogo(false);
      }
    } else {
      indices.forEach((i) => {
        this.palavra.acertadas[Number(i)] = true;
      });
    }
    if (this.palavra.acertadas.every((v) => v === true)) {
      this.fimDeJogo(true);
    }
  }

  fimDeJogo(ganhou: boolean) {
    ganhou
      ? this.router.navigate(['/gameover/win'])
      : this.router.navigate(['/gameover/lose']);
  }
}
