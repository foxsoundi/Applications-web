import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  constructor(public spotifyService: SpotifyService, public router: Router) { }

  ngOnInit() { }

  handleClick(str: string) {
    this.router.navigate(['/rightPanel/' + str]);
  }

}
