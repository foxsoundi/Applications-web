import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

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
  private currentTime = 0.0;
  private endTime = 0.0;

  @ViewChild('audioVolumeSlide') audioVolumeSlide: ElementRef;
  @ViewChild('audioVolumeIcon') audioVolumeIcon: ElementRef;
  @ViewChild('audioControl') audioControl: ElementRef;
  @ViewChild('audioTimeSlide') audioTimeSlide: ElementRef;

  private control;
  private volumeSlide;
  private volumeIcon;
  private timeSlide;
  public videoHeight = 70; // 1
  public videoWidth = 90; // 1

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.listen().subscribe((m: any) => {
      console.log(m);
      this.loadVideo();
    });
  }

  onFilterClick(event) {
    console.log('Fire onFilterClick: ', event);
  }

  ngOnInit(): void {
    this.control = this.audioControl.nativeElement;
    this.volumeSlide = this.audioVolumeSlide.nativeElement;
    this.volumeIcon = this.audioVolumeIcon.nativeElement;
    this.timeSlide = this.audioTimeSlide.nativeElement;
  }

  loadVideo() {
    this.player.loadVideoById(this.youtubeService.idVideo.videoId);
    this.control.textContent = 'pause';
  }

  onStateAudioChange(event) {
    this.ytEvent = event.data;
  }

  onStateVolumeChange() {
    this.setVolumeVideo(this.volumeSlide.value);
  }

  onStateTimeChange() {
    this.setCurrentTime(this.timeSlide.value);
    console.log(this.timeSlide.value);
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
    this.player.setVolume(volume);
    this.volumeSlide.value = volume;
    this.setVolumeIconState(volume);
  }

  setVolumeIconState(volume: number) {
    if (volume <= 0) {
      this.volumeIcon.textContent = 'volume_mute';
    } else if (volume >= 50) {
      this.volumeIcon.textContent = 'volume_up';
    } else {
      this.volumeIcon.textContent = 'volume_down';
    }
  }

  getAudioCurrentTime(): number {
    return this.player.getCurrentTime();
  }

  getAudioEndTime(): number {
    return this.player.getDuration();
  }

  setCurrentTime(seconde: number) {
    this.player.seekTo(seconde, true);
  }
}
