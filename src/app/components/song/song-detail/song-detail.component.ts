import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

    song?: Song ;
    id?: number;

  constructor(private songService: SongService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }
  ngOnInit(): void {
    this.getById();
  }

  getById() {
    return this.songService.findByIdSong(this.id).subscribe((data: Song) => {
       this.song = data;
      console.log(data)
    });
  }

}
