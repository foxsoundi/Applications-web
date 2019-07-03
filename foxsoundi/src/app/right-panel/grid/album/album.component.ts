import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../../services/spotify.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  constructor(public spotifyService: SpotifyService, public router: Router) { }

  ngOnInit() { }

  handleClick(str: string) {
    this.router.navigate(['/playlist/' + str]);
  }
}
