import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [
    RouterModule.forChild([{ path: 'game', component: GameComponent }]),
  ],
})
export class GameModule {}
