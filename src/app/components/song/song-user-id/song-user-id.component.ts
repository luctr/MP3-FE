import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song.service";
import {Song} from "../../model/Song";

@Component({
  selector: 'app-song-user-id',
  templateUrl: './song-user-id.component.html',
  styleUrls: ['./song-user-id.component.scss']
})
export class SongUserIdComponent implements OnInit {
  songs: Song[] = [];
id: string = '';
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = localStorage.getItem('user_id');
// @ts-ignore
    this.songService.getAllByUser_id(this.id).subscribe(data =>{
  this.songs = data;
  console.log(data);
})
  }

}
