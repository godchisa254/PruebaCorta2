import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ResponseAPIGetAll } from '../../interfaces/ResponseAPIGetAll';

@Component({
  selector: 'character-button1',
  standalone: true,
  imports: [HttpClientModule],
  providers: [CharacterService],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.css'
})
export class Button1Component {

  private characterService: CharacterService = inject(CharacterService);
  characterName: string = '';
  characterList: ResponseAPIGetAll[] = [];
  constructor() { }
  
  GetCharacters(characterName: string){
    this.characterService.getCharacters(characterName).then((response) => {
      console.log(response = this.characterList);
    }).catch((error) => {
      console.error(error);
    });
  }

  onClick(){

  }
}
