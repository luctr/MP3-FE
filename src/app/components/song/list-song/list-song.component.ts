import { Component, OnInit } from '@angular/core';

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../model/song";

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {

  song: Song [] = [];

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
    return this.songService.getAllSong().subscribe((data: Song[]) => {
      this.song = data;
      console.log(data)
    });
  }


}
