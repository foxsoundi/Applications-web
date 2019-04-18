import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  audioSource = 'assets/audio/audio_dasha.mp3';

  @ViewChild('audioPlayer') audioplayer: ElementRef;
  toggleAudio() {
    this.audioplayer.nativeElement.play();
  }
}
