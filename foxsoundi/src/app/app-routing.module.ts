import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from "./right-panel/grid/album/album.component";
import { PlaylistComponent } from "./right-panel/grid/playlist/playlist.component";
import { ArtistComponent } from "./right-panel/list/artist/artist.component";
import {TrackComponent} from "./right-panel/list/track/track.component";
import {SigninComponent} from "./right-panel/login/signin/signin.component";
import {SignupComponent} from "./right-panel/login/signup/signup.component";

const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'home', component: AlbumComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'playlist/:idAlbum', component: PlaylistComponent },
  { path: 'track', component: TrackComponent },
  { path: 'track/:idPlaylist', component: TrackComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'artist', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
