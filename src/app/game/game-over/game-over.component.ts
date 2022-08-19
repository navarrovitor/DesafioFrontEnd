import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWord } from '../word';
import { WordService } from '../word.service';

@Component({
  selector: 'gg-game-over',
  templateUrl: './game-over.component.html',
})
export class GameOverComponent implements OnInit {
  palavra: IWord | undefined;
  title: string | undefined;
  win: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private wordService: WordService
  ) {}

  ngOnInit(): void {
    this.wordService.palavraEscolhida$.subscribe((p) => {
      this.palavra = p;
    });
    if (this.route.snapshot.paramMap.get('status') === 'win') {
      this.title = 'Parabéns!';
    } else {
      this.title = 'Ah não!';
      this.win = false;
    }
  }

  onBack() {
    this.router.navigate(['/welcome']);
  }
}
