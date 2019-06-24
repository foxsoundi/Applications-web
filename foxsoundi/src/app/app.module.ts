import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MidPanelComponent } from './mid-panel/mid-panel.component';
import { SpotifyService } from './spotify.service';
import { GridComponent } from './mid-panel/grid/grid.component';
import { ListComponent } from './mid-panel/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    LeftPanelComponent,
    MidPanelComponent,
    GridComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
