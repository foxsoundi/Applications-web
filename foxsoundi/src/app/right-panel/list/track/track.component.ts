import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../../services/spotify.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TracksRawRoot} from "../../../lib/trackRaw";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  theTrack: TracksRawRoot
  idPlaylist: string;

  constructor(public spotifyService: SpotifyService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {this.idPlaylist = params.idPlaylist; console.log(params.idPlaylist);});

    this.spotifyService.getTrackOfPlaylist(this.idPlaylist)
      .subscribe(list => this.theTrack = list);
  }

}
