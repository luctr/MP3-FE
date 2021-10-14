import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../../service/playlist.service";
import {Playlist} from "../../model/Playlist";

@Component({
  selector: 'app-play-list-user-id',
  templateUrl: './play-list-user-id.component.html',
  styleUrls: ['./play-list-user-id.component.scss']
})
export class PlayListUserIdComponent implements OnInit {
playList: Playlist[] = [];
// @ts-ignore
  id: number = localStorage.getItem("user_id");
  constructor(private playListService: PlaylistService) { }

  ngOnInit(): void {
   this.playListService.getAllByUser_id(this.id).subscribe(data =>{
     this.playList = data;
   },error => {
     console.log(error);
     }
     )
  }

}
