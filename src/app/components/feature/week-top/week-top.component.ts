import { Component, OnInit } from '@angular/core';
import {SingerService} from "../../../service/singer.service";

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../model/song";
import {Singer} from "../../model/Singer";

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {
  song: Song [] = [];
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
    return this.songService.getAllSong().subscribe((data: Song[]) => {
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
