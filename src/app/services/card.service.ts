import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cads!: Array<Card>;

  constructor() {
    this.cads = [
      {
        id: 0,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 1,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 2,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 3,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 4,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 5,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 6,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
      {
        id: 7,
        title: '',
        date: '',
        local: '',
        type: '',
        desc: '',
        link: '',
      },
    ];
  }

  public getCard() {
    return this.cads;
  }
}
