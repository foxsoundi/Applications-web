import { Component, OnInit, Injectable } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {

    console.log('Il est appelé');
    //const genre = this.spotifyService.getGenre('https://localhost:5001/v1/music/genre');
    //console.log(genre);
  }



}
