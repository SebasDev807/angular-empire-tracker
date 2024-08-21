import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResponse } from '../interfaces/character.response';

@Injectable({
  providedIn: 'root'
})
export class StarWarsDataService {

  public cardList!: CharacterResponse[];

  constructor(private http: HttpClient) { }

  public searchTag(tag: string) {
    this.http.get<CharacterResponse[]>(`http://localhost:3000/api/characters/${tag}`)
      .subscribe(res => {
        this.cardList = res;
        console.log({ card: this.cardList });

      })
  }
}
