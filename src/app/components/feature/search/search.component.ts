import {Component, OnInit,} from '@angular/core';
import {SingerService} from "../../../service/singer.service";
import {SongService} from "../../../service/song.service";
import {PlaylistService} from "../../../service/playlist.service";
import {Singer} from "../../model/Singer";
import {Playlist} from "../../model/Playlist";
import { Song } from '../../model/Song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  x: number = 0;
  check1: Boolean = false;
  check2: Boolean = false;
  check3: Boolean = false;
  name: string = '';
  songs: Song[] = [];
  singers: Singer[] = [];
  playlist: Playlist[] = [];

  constructor(private singerService: SingerService,
              private songService: SongService,
              private playlistService: PlaylistService
  ) {
  }

  ngOnInit(): void {
    this.x = 0;
    // @ts-ignore
    this.name = localStorage.getItem('key');
    console.log(this.name);
    this.songService.getByName(this.name).subscribe(songList => {
      this.songs = songList
      console.log(this.songs);
      if (this.songs.length > 0) {
        this.check1 = true;
      } else {
        this.playlistService.getByName(this.name).subscribe(date2 => {
          this.playlist = date2;
          console.log(this.playlist);
          if (this.playlist.length > 0) {
            this.check2 = true;
            console.log(this.check2)
          } else {
            this.singerService.getByName(this.name).subscribe(date3 => {
              this.singers = date3;
              console.log(this.singers);
              if (this.singers.length > 0) {
                this.check3 = true
              }
            }, error => {
              console.log(error);
            });
          }
        }, error => {
          console.log(error);
        });
      }
    }, error => {
      console.log(error);
    });
  }


}

