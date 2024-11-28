import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../../services/character.service';
import { ResponseAPIGetAll } from '../../interfaces/ResponseAPIGetAll';
import { NgFor } from '@angular/common';


@Component({
  selector: 'character-navigation',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  providers: [CharacterService],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  private characterService: CharacterService = inject(CharacterService);
  
  characterList: ResponseAPIGetAll['results'] = [];
  nextPage: string | null = null;
  prevPage: string | null = null;
  totalPages: number = 0;
  currentPage: number = 1;
  

  constructor() { 
    this.GoToPage(this.currentPage);

  }
 
  NextPage() {
    if (this.nextPage) {
      this.characterService.fetchPage(this.nextPage).then((response) => {
        this.updatePageData(response);
        this.currentPage++;
      }).catch((error) => console.error(error));
    }
  }
 
  PrevPage() {
    if (this.prevPage) {
      this.characterService.fetchPage(this.prevPage).then((response) => {
        this.updatePageData(response);
        this.currentPage--;
      }).catch((error) => console.error(error));
    }
  }

  GoToPage(value: number) {
  
    if (value) {
      const page = Number(value);
      console.log('Navigating to page:', page);
        if (!page || isNaN(Number(page))) {
          console.error('Invalid page number selected:', page);
          return;
        }
      
        const pageNumber = Number(page);
        const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
        this.characterService.fetchPage(url)
          .then((response) => {
            this.updatePageData(response);
            this.currentPage = pageNumber;
          })
          .catch((error) => console.error(error));
    } else {
      console.warn('No value selected');
    }
  } 
 
  private updatePageData(response: ResponseAPIGetAll) {
    this.characterList = response.results;
    this.nextPage = response.info.next;
    this.prevPage = response.info.prev;
    this.totalPages = response.info.pages;
  }
}
