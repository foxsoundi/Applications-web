import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foxsoundi';
  videoSource = 'assets/video/video_dance.mp4';
  audioSource = 'assets/audio/audio_dasha.mp3';


  @ViewChild('videoPlayer') videoplayer: ElementRef;

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  @ViewChild('audioPlayer') audioplayer: ElementRef;

  toggleAudio() {
    this.audioplayer.nativeElement.play();
  }
}
