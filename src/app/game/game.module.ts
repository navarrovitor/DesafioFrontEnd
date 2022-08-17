import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { SharedModule } from '../shared/shared.module';
import { WordComponent } from './word.component';

@NgModule({
  declarations: [GameComponent, WordComponent],
  imports: [
    RouterModule.forChild([{ path: 'game', component: GameComponent }]),
    SharedModule,
  ],
})
export class GameModule {}
