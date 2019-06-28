import { Component, OnInit, Injectable } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  constructor(public spotifyService: SpotifyService) { }

  ngOnInit() { }

}
