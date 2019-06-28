import {Component, ElementRef, ViewChild} from '@angular/core';
import {SpotifyService} from "./spotify.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public spotifyService: SpotifyService){
    //if (spotifyService.genresRawRoot.categories.items)
  }
  title = 'foxsoundi';
}
