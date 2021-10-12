import { Component, OnInit } from '@angular/core';

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../model/song";

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {
  songg: Song [] = [];

  constructor(private songService: SongService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.songService.getAllSong().subscribe((data: Song[]) => {
      this.songg = data;
    });
  }

}
