import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../../services/spotify.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PlaylistsRawRoot } from "../../../lib/playlistRaw";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  thePlaylist: PlaylistsRawRoot;
  idGenre: string;

  constructor(public spotifyService: SpotifyService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.idGenre = params.idAlbum);

    this.spotifyService.getPlaylistOfGenre(this.idGenre)
      .subscribe(list => this.thePlaylist = list);
  }

  ngDoCheck() {

  }

  ngAfterContentInit() {

  }
  ngAfterContentChecked() {

  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {

  }

  handleClick(str: string) {
    this.router.navigate(['/track/' + str]);
  }

}
