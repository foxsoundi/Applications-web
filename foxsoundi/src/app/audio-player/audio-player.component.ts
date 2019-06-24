import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  audioSource = 'assets/audio/audio_dasha.mp3';

  constructor() { }

  ngOnInit() { }

  @ViewChild('audioPlayer') audioplayer: ElementRef;
  @ViewChild('control') audioControl: ElementRef;
  @ViewChild('progressBar') audioProgressBar: ElementRef;
  /*toggleAudio() {
    this.audioplayer.nativeElement.play();
  }*/

  play() {
    console.log(this.audioplayer);
    const player = this.audioplayer.nativeElement;
    const control = this.audioControl.nativeElement;

    if (player.paused) {
      player.play();
      control.textContent = 'Pause';
    } else {
      player.pause();
      control.textContent = 'Play';
    }
  }

  resume() {
    const player = this.audioplayer.nativeElement;

    player.currentTime = 0;
    player.pause();
  }

  volume(vol) {
    const player = this.audioplayer.nativeElement;

    player.volume = vol;
  }


  update() {
    const player = this.audioplayer.nativeElement;
    const duration = player.duration;    // Durée totale
    const time     = player.currentTime; // Temps écoulé
    const fraction = time / duration;
    const percent  = Math.ceil(fraction * 100);

    const progress = this.audioProgressBar.nativeElement;

    progress.style.width = percent + '%';
    progress.textContent = percent + '%';
  }

}
