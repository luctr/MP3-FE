import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/service/playlist/playlist.service';
import {Playlist} from "../../model/Playlist";

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.scss']
})
export class ListPlaylistComponent implements OnInit {
  playlists?: Playlist[] = [];
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
