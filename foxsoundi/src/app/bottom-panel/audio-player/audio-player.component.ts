import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as test from 'youtube-audio-stream'

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
  /*toggleAudio() {
    this.audioplayer.nativeElement.play();
  }*/

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
    const duration = player.duration;    // Durée totale
    const time     = player.currentTime; // Temps écoulé
    const fraction = time / duration;
    const percent  = Math.ceil(fraction * 100);

    const progress = this.audioProgressBar.nativeElement;

    progress.style.width = percent + '%';
    // progress.textContent = percent + '%';
  }



  testMethod(){
    console.log("TEST");
    console.log(test);

    // var youtubeStream = require('youtube-audio-stream');
    var getAudio = function (req, res) {
      var requestUrl = 'http://youtube.com/watch?v=' + req.params.videoId;
      console.log("TEST2");
      console.log(requestUrl);
      try {
        test(requestUrl).pipe(res)
      } catch (exception) {
        res.status(500).send(exception)
      }
    }
  }


}
