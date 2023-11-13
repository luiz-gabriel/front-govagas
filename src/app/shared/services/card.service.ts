import { Injectable } from '@angular/core';
import { Card } from '../../model/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  protected url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/';
  }

  public getCards(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>(`${this.url}vagas`).pipe(
      (res) => res,
      (erro) => erro
    );
  }

  public addCards(
    title: string,
    date: string,
    local: string,
    type: string,
    desc: string,
    link: string
  ) {
    return this.http
      .post<Array<Card>>(`${this.url}vagas`, {
        title: title,
        date: date,
        local: local,
        type: type,
        desc: desc,
        link: link,
      })
      .pipe(
        (res) => res,
        (erro) => erro
      );
  }

  public editCards(
    id: number,
    title: string,
    date: string,
    local: string,
    type: string,
    desc: string,
    link: string
  ) {
    return this.http
      .put<Array<Card>>(`${this.url}vagas/${id}`, {
        title: title,
        date: date,
        local: local,
        type: type,
        desc: desc,
        link: link,
      })
      .pipe(
        (res) => res,
        (erro) => erro
      );
  }
}
