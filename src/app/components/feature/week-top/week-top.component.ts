import { Component, OnInit } from '@angular/core';
import {SingerService} from "../../../service/singer.service";

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Singer} from "../../model/Singer";
import { song } from '../../model/song';

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {
  song: song [] = [];
  singers: Singer [] = [];

  constructor(private songService: SongService,
              private activeRouter: ActivatedRoute,
              private singerService: SingerService) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }

  ngOnInit() {
    this.getAll();
    console.log(this.getAll())
    this.getTop7()
  }

  getAll() {
    return this.songService.getAllSong().subscribe((data: song[]) => {
      this.song = data;
      console.log(data)
    });
  }
  getTop7(){
    this.singerService.getAll().subscribe(data => {
      this.singers = data;
    })
  }

}
