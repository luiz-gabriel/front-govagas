import { Component } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.scss'],
})
export class CardVagaComponent {
  public cards!: Array<Card>;

  constructor(private cardsService: CardService) {
    this.cards = cardsService.getCard();
  }
}
