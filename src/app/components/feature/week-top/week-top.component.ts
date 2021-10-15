import {Component, OnInit} from '@angular/core';
import {SingerService} from "../../../service/singer.service";

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../model/song";
import {Singer} from "../../model/Singer";
import {PlaylistService} from "../../../service/playlist.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {Playlist} from "../../../model/playlist";
import {CreatePlaylistComponent} from "../create-playlist/create-playlist.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {
  song: Song [] = [];

  songs: any[] = [];

  singers: Singer [] = [];

  newPlaylist = {
    id: 0,
    description: '',
    name: '',
    user: {
      id: 0
    },
    song: this.song,
  };


  playlisst: Playlist | undefined;

  playList: Playlist [] = [];

  playListForm: FormGroup = new FormGroup({});

  name: any;

  idUser: any;

  topSong: Song[] = [];

  topForm!: FormGroup;

  id!: number ;


  constructor(private songService: SongService,
              private activeRouter: ActivatedRoute,
              private singerService: SingerService,
              private playlistService: PlaylistService,
              private userService: UserService,
              private dialog:MatDialog) {
    this.activeRouter.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id');
    });
  }

  ngOnInit() {
    this.getAll();
    this.getAllPlaylist();
    this.getTop7()
    this.playListForm = new FormGroup({
      id: new FormControl(0),
      description: new FormControl(''),
      name: new FormControl(''),
      user: new FormControl(),
      song: new FormControl(),
    })
    if (localStorage.getItem('user') != null){
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.name = obj.name;
    }
    this.userService.findByName(this.name).subscribe(data => {
      this.idUser = data.id
    })
    this.topForm = new FormGroup({
      count:new FormControl()
    })

  }

  getAll() {
    return this.songService.getAllSong().subscribe((data: Song[]) => {
      this.song = data;
    });
  }

  getTop7() {
    this.singerService.getAll().subscribe(data => {
      this.singers = data;
    })
  }

  addPlayList(song: any, event: any) {
    this.playlistService.findById(event.value).subscribe(data => {
      this.playListForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        user: new FormControl(data.user),
        song: new FormControl(data?.song),
      });
      this.songs = data.song;
      this.songs.push(song);
      this.newPlaylist.name = this.playListForm.value.name;
      this.newPlaylist.description = this.playListForm.value.description;
      this.newPlaylist.user.id = this.idUser;
      this.newPlaylist.song = this.songs;
      this.playlistService.edit(event.value,this.newPlaylist).subscribe();
    })
  }

  getAllPlaylist() {
    this.playlistService.getAll().subscribe(playlist => {
      this.playList = playlist;
    })
  }

  open(){
    this.dialog.open(CreatePlaylistComponent)
  }

  songs1(id:  any){
    localStorage.setItem('id',id),
      this.open()
  }


  saveCount() {
    this.songService.createSong(this.topForm.value).subscribe((data) => {
    })
  }

  // getCount(id:number) {
  //   this.songService.findByIdSong(id).subscribe((data) => {
  //     console.log(data.count)
  //     this.topForm = new FormGroup({
  //       count: new FormControl(data.count),
  //     })
  //     this.saveCount();
  //   })
  // }


}


