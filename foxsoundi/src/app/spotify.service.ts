import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {GenresRawRoot, GenresRaw, GenreRaw} from './lib/genreRaw';
import {Genre} from "./lib/genre";

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { }

  getGenre(url: string): Observable<Genre> {
    return this.http.get<GenresRawRoot>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
      // .pipe(map(rawpoke => {
      //   console.log(rawpoke.stats.find(x => x.stat.name === 'defense').base_stat);
      //   return new Genre(rawpoke.name,
      //     5,
      //     rawpoke.stats.find(x => x.stat.name === 'attack').base_stat,
      //     rawpoke.stats.find(x => x.stat.name === 'defense').base_stat,
      //     rawpoke.stats.find(x => x.stat.name === 'hp').base_stat,
      //     rawpoke.stats.find(x => x.stat.name === 'hp').base_stat,
      //     rawpoke.stats.find(x => x.stat.name === 'attack').base_stat * 2,
      //     rawpoke.stats.find(x => x.stat.name === 'speed').base_stat
      //   )}
      // ));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
    // Get client-side error
      errorMessage = error.error.message;
    } else {
    // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
