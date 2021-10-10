import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SingerService} from "../../../service/singer.service";
import {SongService} from "../../../service/song.service";
import {PlaylistService} from "../../../service/playlist.service";
import {Song} from "../../../model/song";
import {Singer} from "../../../model/singer";
import {Playlist} from "../../../model/playlist";

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
  name: string | null | undefined;
  songs: Song[] = [];
  singers: Singer[] = [];
  playlist: Playlist[] = [];

  constructor(private singerService: SingerService,
              private songService: SongService,
              private playlistService: PlaylistService
  ) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('key');
    console.log(this.name);
    // this.name = 'hello'
    // this.songService.getByName(this.name).subscribe(date1 => {
    //   this.songs = date1;
    //   console.log(date1);
    // }, error => {
    //   console.log(error);
    // })
    // this.singerService.getByName(this.name).subscribe(date2 => {
    //   this.singers = date2;
    //   console.log(date2);
    // }, error => {
    //   console.log(error);
    // })
    // this.playlistService.getByName(this.name).subscribe(date3 => {
    //   this.playlist = date3;
    //   console.log(date3);
    // }, error => {
    //   console.log(error);
    // })
    // while (this.x < 10) {
    //   if (this.songs.length > 0) {
    //     this.check1 = true;
    //     break;
    //   }
    //   if (this.playlist.length > 0) {
    //     this.check2 = true;
    //     break;
    //   }
    //   if (this.singers.length > 0) {
    //     this.check3 = true;
    //     break;
    //   }
    // }
  }


}

