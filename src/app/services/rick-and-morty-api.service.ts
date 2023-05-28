import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ICharacter,
  IResponseAllCharacter,
  IResponseCharacter,
} from './rick-and-morty-api.interface';

@Injectable({ providedIn: 'root' })
export class RickAndMortyApiService {
  constructor(private httpClient: HttpClient) {}

  private URL_API = 'https://rickandmortyapi.com/api/character';

  getAllCharacter(): Observable<ICharacter[]> {
    return this.httpClient
      .get<IResponseAllCharacter>(this.URL_API)
      .pipe(map((response) => response.results));
  }

  getCharacter(id: number): Observable<IResponseCharacter> {
    return this.httpClient.get<IResponseCharacter>(`${this.URL_API}/${id}`);
  }
}
