import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game.interface';
import { games } from 'src/assets/data/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    games: Game[] = games
}
