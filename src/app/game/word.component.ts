import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IWord } from './word';
import { WordService } from './word.service';

@Component({
  selector: 'gg-word',
  templateUrl: './word.component.html',
})
export class WordComponent implements OnInit {
  palavra: IWord = { inteira: '', separada: [], acertadas: [] };
  tamanhoPalavra: number = 0;
  chutes!: number;
  erros: string[] = [];

  constructor(private router: Router, private wordService: WordService) {}

  ngOnInit(): void {
    this.escolhePalavra();
  }

  // Chama o word service, que determina a palavra e o número de chutes que o jogador terá
  // Depois de receber a palavra, faz um array com cada letra da mesma e também
  // inicia o array de letras acertadas com false
  escolhePalavra() {
    this.wordService.palavraEscolhida$.subscribe((p) => {
      this.palavra.inteira = String(p[0]);
      this.chutes = p[1];
    });
    this.palavra.separada = this.palavra.inteira.split('');
    this.palavra.acertadas = new Array(this.palavra.separada.length).fill(
      false
    );
  }

  // Manuseia o submit da letra que o jogador tenta
  onSubmit(input: NgForm) {
    this.confereLetra(input.value.tentativa);
    input.resetForm();
  }

  // Faz a conferência de cada letra que o jogador tenta
  confereLetra(letra: string) {
    // Confere se:
    // 1. Já tentou essa letra
    // 2. Não é um símbolo ou um número
    if (
      !/^[a-zA-Z]+$/.test(letra) ||
      this.erros.includes(letra.toUpperCase()) ||
      this.palavra.acertadas[this.palavra.separada.indexOf(letra.toUpperCase())]
    ) {
      alert('Você precisa inserir uma letra nova!');
      return;
    }
    letra = letra.toUpperCase();

    // Array com cada índice no qual a letra aparece
    const indices = [
      ...this.palavra.inteira.matchAll(new RegExp(letra, 'gi')),
    ].map((a) => a.index);

    // Confere se:
    // 1. Há algum índice aonde a letra aparece.
    // Se não houver, o número de chutes é subtraido de 1
    // Se houver, a letra aparece em cada posição
    // 2. O jogador acertou todas as letras ou perdeu todas as chances
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

  // Redireciona o jogador para a tela de game over
  fimDeJogo(ganhou: boolean) {
    ganhou
      ? this.router.navigate(['/gameover/win'])
      : this.router.navigate(['/gameover/lose']);
  }
}
