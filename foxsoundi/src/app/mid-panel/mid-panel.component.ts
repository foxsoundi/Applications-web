import { Component, OnInit, Injectable } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-mid-panel',
  templateUrl: './mid-panel.component.html',
  styleUrls: ['./mid-panel.component.css']
})
export class MidPanelComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {

    console.log('Il est appelé');
    const genre = this.spotifyService.getGenre('https://foxsoundiapi.azurewebsites.net/v1/genres');
    console.log(genre);

  }



}
