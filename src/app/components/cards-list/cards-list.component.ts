import { Component, Input } from '@angular/core';
import { Game } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {

    @Input() title: string = ""
    @Input() games: Game[] = []
}
