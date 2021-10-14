import {Component, OnInit} from '@angular/core';
import {Track} from "ngx-audio-player";
import {Playlist} from "../../model/Playlist";
import {PlaylistService} from "../../../service/playlist.service";
import {Song} from "../../model/Song";

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  playList?: Playlist;
  DisplayTitle = true;
  DisplayPlayList = true;
  PageSizeOptions = [2, 4, 6];
  DisplayVolumeControls = true;
  DisplayRepeatControls = true;
  DisplayArtist = false;
  DisplayDuration = false;
  DisablePositionSlider = true;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlistService.findById(1).subscribe(data => {
      this.playList = data;
      for(let i=0; i< data.song.length; i++){
        const track =
        {
          title: data.song[i].name,
            link: data.song[i].mp3,
          artist: data.song[i].avatar,
        }
        this.Playlist1.push(track);
      }
      console.log(this.Playlist1)
    }, error => {
      console.log(error);
    })
  }

  Playlist1: Track[] = [
  ];

  onEnded($event: string) {
    console.log("hello")
  }
}
