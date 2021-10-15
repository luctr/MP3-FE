import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Song} from "../../../model/song";
import {UserService} from "../../../service/user.service";
import {PlaylistService} from "../../../service/playlist.service";
import {SongService} from "../../../service/song.service";
import {Playlist} from "../../../model/playlist";


@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {
  idUser: any;

  name: any;

  id: any;

  // @ts-ignore
  song: Song

  playlist: Playlist = {};

  playlistForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    user: new FormControl(),
    song: new FormControl('')
  });

  constructor(
    private songService: SongService,
    public dialogRef: MatDialogRef<CreatePlaylistComponent>,
    public userService: UserService,
    public playlistService: PlaylistService) {
  }

  songs: Song [] = [];


  ngOnInit(): void {
    if (localStorage.getItem('user') != null){
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.name = obj.name;
    }
    debugger
    this.userService.findByName(this.name).subscribe(data => {
      this.idUser = data.id
    })

    if (localStorage.getItem('id') != null) {
      let obj = localStorage.getItem('id');
      if (obj != null) {
        this.getById(Number.parseInt(obj))
      }
    }
    // if (localStorage.getItem('idUser') != null) {
    //   let idUser = Number(localStorage.getItem('idUser'));
    //   if (idUser != null) {
    //     this.idUser = idUser
    //   }
    // }
    // playlistForm:  new FormGroup({
    //   name: new FormControl(''),
    //   description: new FormControl(''),
    //   user: new FormControl(''),
    //   song: new FormControl(''),
    // });

  }

  newPlayList() {
    if (this.playlistForm != null) {
      console.log("this.playlist")
      console.log(this.playlist)
      this.songs.push(this.song)
      this.playlist.name = this.playlistForm.value.name
      this.playlist.description = this.playlistForm.value.description
      console.log(this.idUser)
      let userNew = {id: this.idUser};
      this.playlist.user = userNew;
      this.playlist.song = this.songs

      console.log(this.playlist)
      this.playlistService.create(this.playlist).subscribe(data => {
        this.onNoClick()
        alert("create success !")
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getById(id: number) {
    this.songService.findByIdSong(id).subscribe(data => {
      this.song = data
    })

  }


}
