import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.css']
})
export class PromotionCardComponent {

  @Input('regularPrice') regularPrice!: number; 
  @Input('discount') discount!: number; 

}
