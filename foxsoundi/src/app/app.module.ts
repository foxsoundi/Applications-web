import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './bottom-panel/audio-player/audio-player.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { SpotifyService } from './services/spotify.service';
import { GridComponent } from './right-panel/grid/grid.component';
import { ListComponent } from './right-panel/list/list.component';
import { LoginComponent } from './right-panel/login/login.component';
import { AlertComponent } from './alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './right-panel/login/signin/signin.component';
import { SignupComponent } from './right-panel/login/signup/signup.component';
import { AlbumComponent } from './right-panel/grid/album/album.component';
import { PlaylistComponent } from './right-panel/grid/playlist/playlist.component';
import { TrackComponent } from './right-panel/list/track/track.component';
import { ArtistComponent } from './right-panel/list/artist/artist.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    LeftPanelComponent,
    RightPanelComponent,
    GridComponent,
    ListComponent,
    LoginComponent,
    AlertComponent,
    SigninComponent,
    SignupComponent,
    AlbumComponent,
    PlaylistComponent,
    TrackComponent,
    ArtistComponent,
    BottomPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    SpotifyService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
