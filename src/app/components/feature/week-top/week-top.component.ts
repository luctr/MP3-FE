import { Component, OnInit } from '@angular/core';
import {Song} from "../../model/song";
import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {
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
