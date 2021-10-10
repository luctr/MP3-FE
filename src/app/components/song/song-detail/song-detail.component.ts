import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../../model/user";
import {SongCategory} from "../../../model/song-category";
import {Singer} from "../../../model/singer";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
  songForm!: FormGroup;
    id?: number ;

  constructor(private songService: SongService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.songForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    mp3: new FormControl(),
    avatar: new FormControl(),
    author: new FormControl(),
    user: new FormControl(),
    songCategory: new FormControl(),
    singer: new FormControl()
    })
    this.activeRoute.params.subscribe((data) => this.id = data.name);
    this.showEditProduct(this.id);
  }

  showEditProduct(id:any) {
    this.http.get<Song>(`http://localhost:8080/songs/${id}`).subscribe((data) => {
      this.songForm.get('name');
      this.songForm.get('description');
      this.songForm.get('mp3');
      this.songForm.get('avatar');
      this.songForm.get('author');
      this.songForm.get('user');
      this.songForm.get('songCategory');
      this.songForm.get('singer');
    })
  }

}
