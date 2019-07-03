import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})

export class AudioPlayerComponent implements OnInit {

  constructor() { }
  audioSource = 'assets/audio/audio_dasha.mp3';
  volume = 70;

  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  @ViewChild('audioControl') audioControl: ElementRef;
  @ViewChild('audioProgressBar') audioProgressBar: ElementRef;
  @ViewChild('audioVolumeSlide') audioVolumeSlide: ElementRef;

  ngOnInit() { }

  play() {
    const player = this.audioPlayer.nativeElement;
    const control = this.audioControl.nativeElement;

    if (player.paused) {
      player.play();
      control.textContent = 'play_arrow';
    } else {
      player.pause();
      control.textContent = 'pause';
    }
  }

  resume() {
    const player = this.audioPlayer.nativeElement;

    player.currentTime = 0;
    player.pause();
  }

  volumeUpdate(vol) {
    const player = this.audioPlayer.nativeElement;

    player.volume = vol;
  }


  update() {
    const player = this.audioPlayer.nativeElement;
    const duration = player.duration;
    const time     = player.currentTime;
    const fraction = time / duration;
    const percent  = Math.ceil(fraction * 100);

    const progress = this.audioProgressBar.nativeElement;

    progress.style.width = percent + '%';
  }

}
