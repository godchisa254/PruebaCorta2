import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'character-navigation',
  standalone: true,
  imports: [HttpClientModule],
  providers: [CharacterService],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  private characterService: CharacterService = inject(CharacterService);

  constructor() { }

  NextPage(){
    console.log('Next Page');
  }

  PrevPage(){
    console.log('Previous Page');
  } 

  GoToPage(page: number){
    
    this.characterService.GoToPage(page).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });  
  }

}
