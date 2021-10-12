import { Component, OnInit } from '@angular/core';

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import { song } from '../../model/song';
@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {

  song: song [] = [];

  constructor(private songService: SongService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }
  ngOnInit() {
    this.getAll();
    console.log(this.getAll())
  }

  getAll() {
    return this.songService.getAllSong().subscribe((data: song[]) => {
      this.song = data;
      console.log(data)
    });
  }


}
