import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gg-game',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {
  title: string = 'Adivinhe a palavra';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/welcome']);
  }
}
