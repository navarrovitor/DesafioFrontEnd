import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared.module';
import { WordComponent } from './word.component';
import { FormsModule } from '@angular/forms';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [GameComponent, WordComponent, GameOverComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'game', component: GameComponent },
      { path: 'gameover/:status', component: GameOverComponent },
    ]),
    SharedModule,
  ],
})
export class GameModule {}
