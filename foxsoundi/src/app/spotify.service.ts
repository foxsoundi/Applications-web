import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { GenresRawRoot } from './lib/genreRaw';
import {PlaylistsRawRoot} from './lib/playlistRaw';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  genresRawRoot: GenresRawRoot;
  playlistsRawRoot: PlaylistsRawRoot;
  serverOK = false;
  URI = 'https://foxsoundi2.azurewebsites.net';

  constructor(private http: HttpClient) {
    this.getGenre();
    this.serverIsOk();
    this.getPlaylistOfGenre('rock');
}

  getGenre(): void {
    this.http.get<GenresRawRoot>(this.URI + '/v1/music/genre')
      .subscribe(result => {
        this.genresRawRoot = result;
        console.log(this.genresRawRoot);
      },
      console.error
      );
  }

  getPlaylistOfGenre(idGenre: string): void {
    this.http.get<PlaylistsRawRoot>(this.URI + '/v1/music/genre/' + idGenre + '/playlists')
      .subscribe(result => {
          this.playlistsRawRoot = result;
          console.log(this.playlistsRawRoot);
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

  serverIsOk(): void {
    this.http.get<boolean>(this.URI + '/ping')
      .subscribe(result => {
          this.serverOK = result;
          console.log(this.serverOK);
          },
        console.error
      );
  }
}
