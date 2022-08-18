import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gg-game',
  templateUrl: './game.component.html',
})
export class GameComponent {
  title: string = 'Adivinhe a palavra';

  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/welcome']);
  }
}
