import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { GameModule } from './game/game.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'regras', component: WelcomeComponent },
      { path: '', redirectTo: 'regras', pathMatch: 'full' },
      { path: '**', redirectTo: 'regras', pathMatch: 'full' },
    ]),
    HttpClientModule,
    GameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
