import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gg-game-over',
  templateUrl: './game-over.component.html',
})
export class GameOverComponent implements OnInit {
  title: string | null | undefined;
  win: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
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
