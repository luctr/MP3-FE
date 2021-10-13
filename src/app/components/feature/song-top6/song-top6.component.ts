import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song.service";
import {Song} from "../../model/Song";
import {Singer} from "../../model/Singer";

@Component({
  selector: 'app-song-top6',
  templateUrl: './song-top6.component.html',
  styleUrls: ['./song-top6.component.scss']
})
export class SongTop6Component implements OnInit {
songList: Song[] = [];
  singer!: Singer;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getTop6New().subscribe(songList => {
      this.songList = songList;
      console.log(songList);
    }, error => {
      console.log(error)
    })
  }
  onEnded($event: string) {

  }
}
