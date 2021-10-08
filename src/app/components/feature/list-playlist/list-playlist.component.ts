import { Component, OnInit } from '@angular/core';
import {playlist} from "../../model/Playlist";
import {PlaylistService} from "../../../service/playlist.service";

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.scss']
})
export class ListPlaylistComponent implements OnInit {
  playlists?: playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.playlistService.getAll().subscribe(playlist => {
      this.playlists = playlist;
      console.log(playlist)
    })
  }

}
