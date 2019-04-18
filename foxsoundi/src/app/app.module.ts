import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MidPanelComponent } from './mid-panel/mid-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    LeftPanelComponent,
    MidPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
