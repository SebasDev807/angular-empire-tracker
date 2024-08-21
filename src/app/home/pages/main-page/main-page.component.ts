import { Component } from '@angular/core';
import { StarWarsDataService } from '../../services/star-wars-data.service';
import { CharacterResponse } from '../../interfaces/character.response';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dataService:StarWarsDataService){}

  get data(): CharacterResponse[]{
    return this.dataService.cardList;
  }
}
