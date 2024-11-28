import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPIGetAll } from '../interfaces/ResponseAPIGetAll';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = 'https://rickandmortyapi.com/api'; //{{base_url}}/character?name=&status&species&type&gender
  public errors: string[] = [];
  private http = inject(HttpClient);

  async getCharacters(name: string): Promise<ResponseAPIGetAll[]> {  
    try {

      const queryParams = new HttpParams().set('name', name); 

      const response = await firstValueFrom(this.http.get<ResponseAPIGetAll[]>(`${this.baseUrl}/character?${queryParams}`));
      console.log(response);
      return Promise.resolve(response);
      

    } catch (error) {
      
      let e = error as HttpErrorResponse;
      
      console.error('Error al obtener los personajes', error);
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
 
  async fetchPage(url: string): Promise<ResponseAPIGetAll> {
    const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(url));
    console.log(response);
    return Promise.resolve(response);
  }

}
