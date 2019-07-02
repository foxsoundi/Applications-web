import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {YoutubeService} from "../../services/youtube.service";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})

export class YoutubePlayerComponent implements OnInit {

  public id = this.youtubeService.idVideo.videoId;
  public playerVars = { cc_lang_pref: 'fr' };
  private player;
  private ytEvent;

  @ViewChild('audioVolumeSlide') audioVolumeSlide: ElementRef;
  @ViewChild('audioVolumeIcon') audioVolumeIcon: ElementRef;
  @ViewChild('audioControl') audioControl: ElementRef;

  private control;
  private volumeSlide;
  private volumeIcon;
  private videoHeight = 70; //1
  private videoWidth = 90; //1

  constructor(public youtubeService: YoutubeService){
    this.youtubeService.listen().subscribe((m:any) => {
      console.log(m);
      // this.onFilterClick(m);
      this.loadVideo();
    })
  }

  onFilterClick(event) {
    console.log('Fire onFilterClick: ', event);
  }

  ngOnInit(): void {
    this.control = this.audioControl.nativeElement;
    this.volumeSlide = this.audioVolumeSlide.nativeElement;
    this.volumeIcon = this.audioVolumeIcon.nativeElement;
  }

  ngDoCheck(){
    this.id = this.youtubeService.idVideo.videoId;
  }

  loadVideo() {
    this.player.loadVideoById(this.id);
  }

  onStateAudioChange(event) {
    this.ytEvent = event.data;
  }

  onStateChange() {
    this.setVolumeVideo(this.volumeSlide.value);
  }

  savePlayer(player) {
    this.player = player;
  }

  switchPlayerState() {
    let state = this.ytEvent;
    if (state !== 1) {
      this.playVideo();
      this.control.textContent = 'pause';
    } else {
      this.pauseVideo();
      this.control.textContent = 'play_arrow';
    }
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  setVolumeVideo(volume: number) {
    console.log("Audio volume => " + volume);

    this.player.setVolume(volume);
    this.volumeSlide.value = volume;
    this.setVolumeIconState(volume);
  }

  setVolumeIconState(volume: number) {
    if (volume <= 0) {
      this.volumeIcon.textContent = 'volume_mute';
    }else if (volume >= 50) {
      this.volumeIcon.textContent = 'volume_up';
    } else {
      this.volumeIcon.textContent = 'volume_down';
    }
  }

}
