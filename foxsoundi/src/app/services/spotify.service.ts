import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GenresRawRoot } from '../lib/genreRaw';
import { PlaylistsRawRoot } from '../lib/playlistRaw';
import { TracksRawRoot } from '../lib/trackRaw';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  genresRawRoot: GenresRawRoot;
  serverOK = false;
  URI = 'https://foxsoundi2.azurewebsites.net';

  constructor(private http: HttpClient) {
    this.getGenre();
    this.serverIsOk();
}

  getGenre(): void {
    this.http.get<GenresRawRoot>(`${this.URI}/v1/music/genre`)
      .subscribe(result => { this.genresRawRoot = result }, console.error );
  }

  getPlaylistOfGenre(idGenre: string): Observable<PlaylistsRawRoot> {
    return this.http.get<PlaylistsRawRoot>(`${this.URI}/v1/music/genre/${idGenre}/playlists`);
  }

  getTrackOfPlaylist(idPlaylist: string): Observable<TracksRawRoot> {
    return this.http.get<TracksRawRoot>(`${this.URI}/v1/music/playlist/${idPlaylist}/tracks`);
  }

  serverIsOk(): void {
    this.http.get<boolean>(`${this.URI}/ping`)
      .subscribe(result => { this.serverOK = result }, console.error );
  }

  handleError(error) {
    let errorMessage = (error.error instanceof ErrorEvent ? error.error.message : `Error Code: ${error.status}\nMessage: ${error.message}`);
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
