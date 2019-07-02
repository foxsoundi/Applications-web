import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  logoMarque  = 'assets/img/foxsoundi.png';

  constructor(public spotifyService: SpotifyService, public router: Router) { }

  ngOnInit() { }

  goAlbum() {
    this.router.navigate(['/album']);
  }

  goSignin() {
    this.router.navigate(['/signin']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }

  goPlaylist(str: string) {
    this.router.navigate(['/playlist/' + str]);
  }

}
