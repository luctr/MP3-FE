import { Component, OnInit } from '@angular/core';
import {Track} from "ngx-audio-player";

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  DisplayTitle = true;
  DisplayPlayList = true;
  PageSizeOptions = [2,4,6];
  DisplayVolumeControls = true;
  DisplayRepeatControls = true;
  DisplayArtist = false;
  DisplayDuration = false;
  DisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
  Playlist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'Link to Audio One URL',
      artist: 'Audio One Artist',

    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL',
      artist: 'Audio Two Artist',

    },
    {
      title: 'Audio Three Title',
      link: 'assets/audio/dummy-audio.mp3',
      artist: 'Audio Three Artist',

    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onEnded($event: string) {

  }
}
