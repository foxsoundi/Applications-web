import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { VideoRootRaw } from "../lib/videoRaw";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private URI = 'https://foxsoundi2.azurewebsites.net';
  public idVideo: VideoRootRaw;
  private _listners = new Subject<any>();

  constructor(private http: HttpClient) {
    this.idVideo = { videoId: '' }
  }

  setIdVideo(str: string): void {
    this.http.get<VideoRootRaw>(`${this.URI}/v1/music/youtube/${this.parseStringToYoutubeString(str)}`)
      .subscribe(result => { this.idVideo = result; }, console.error );
  }

  parseStringToYoutubeString(str: string): string {
    return str.replace(" ","%20");
  }

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

}
