import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { GenresRawRoot } from './lib/genreRaw';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  genresRawRoot: GenresRawRoot;
  serverOK = false;

  constructor(private http: HttpClient) { 
    this.getGenre('https://foxsoundi2.azurewebsites.net/v1/music/genre');
    this.serverIsOk('https://foxsoundi2.azurewebsites.net/ping');
}

  getGenre(url: string): void {
    this.http.get<GenresRawRoot>(url)
      .subscribe(grr => {
        this.genresRawRoot = grr;
      },
      console.error
      );
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

  serverIsOk(url: string): void {
    this.http.get<boolean>(url)
      .subscribe(result => {
          this.serverOK = result;
        },
        console.error
      );
    console.log(this.serverOK);
  }
}
