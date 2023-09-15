import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() img: string = ""
    @Input() title: string = ""
    @Input() discount: number = 0
    @Input() current_price: number = 0
    @Input() old_price: number = 0
    @Input() labels: string[] = []
}
