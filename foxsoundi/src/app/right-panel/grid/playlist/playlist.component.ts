import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../../services/spotify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(public spotifyService: SpotifyService, public router: Router) { }

  ngOnInit() { }

  handleClick(str: string) {
    this.router.navigate(['/track/' + str]);
  }
}
