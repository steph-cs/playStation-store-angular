import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
    @Input() title: string = ""
    @Input() discount: number = 0
    @Input() current_price: number = 0
    @Input() old_price: number = 0
}
