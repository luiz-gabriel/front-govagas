import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.scss'],
})
export class CardVagaComponent implements OnInit {
  public cards!: Array<Card>;

  constructor(private cardsService: CardService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(
      (res) => (this.cards = res),
      (erro) => erro
    );
  }
}
