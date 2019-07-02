import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SpotifyService } from "../../../services/spotify.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TracksRawRoot } from "../../../lib/trackRaw";
import { YoutubeService } from "../../../services/youtube.service";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  theTrack: TracksRawRoot;
  idPlaylist: string;

  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  constructor(public spotifyService: SpotifyService,
              public route: ActivatedRoute,
              public router: Router,
              public youtubeService: YoutubeService
             ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => { this.idPlaylist = params.idPlaylist; });

    this.spotifyService.getTrackOfPlaylist(this.idPlaylist)
      .subscribe(list => this.theTrack = list);
  }

  playAudio(str: string) {
    console.log(str);
    this.youtubeService.setIdVideo(str);
    this.youtubeService.filter('Register click');
    console.log("Test suite");
  }

}
