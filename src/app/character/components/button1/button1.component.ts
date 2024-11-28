import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ResponseAPIGetAll } from '../../interfaces/ResponseAPIGetAll';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'character-button1',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor],
  providers: [CharacterService],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.css'
})
export class Button1Component {

  private characterService: CharacterService = inject(CharacterService);
  characterName: string = '';
  characterList: ResponseAPIGetAll['results'] = [];
  constructor() { }
  
  GetCharacters(event: Event, query: string) {
    event.preventDefault()
    this.characterName = query;
    const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
    
    this.characterService.fetchPage(url).then((response) => {
      this.characterList = response.results;
    }).catch((error) => {
      console.error('Error recuperando los personajes:', error);
    });
  }

  onClick(){

  }
}
