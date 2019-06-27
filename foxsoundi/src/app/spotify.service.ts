import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError, map} from 'rxjs/operators';
import {GenresRawRoot, GenresRaw, GenreRaw} from './lib/genreRaw';
import {Genre} from './lib/genre';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  genresRawRoot: GenresRawRoot;
  constructor(private http: HttpClient) { 
    this.getGenre('http://foxsoundi2.azurewebsites.net/v1/music/genre');
}

  getGenre(url: string): void {
    this.http.get<GenresRawRoot>(url)
    
      .subscribe(grr => {
        this.genresRawRoot = grr;
      },
      console.error
      );
      // .pipe(
      //   map(grr => {
      //     this.genresRawRoot = grr;
      //     return grr;
      //   }),
      //   retry(1),
      //   catchError(this.handleError)
      // );
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
