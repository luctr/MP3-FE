import { Component, OnInit } from '@angular/core';

import {SongService} from "../../../service/song.service";


import { song } from '../../model/song';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-list-song',
  templateUrl:'./list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {

  song: song [] = [];

  // @ts-ignore
  constructor(private songService: SongService,
              private router :Router,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.songService.getAllSong().subscribe((data: song[]) => {
      this.song = data;

    });
  }








}
