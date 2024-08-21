import { Component, ElementRef, ViewChild } from '@angular/core';
import { StarWarsDataService } from '../../../home/services/star-wars-data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
 
  constructor(private appService: StarWarsDataService) { }

  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.appService.searchTag(newTag);
    
  }
}
