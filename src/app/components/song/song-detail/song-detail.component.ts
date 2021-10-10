import {Component, OnInit, ViewChild} from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song/song.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../../model/user";
import {SongCategory} from "../../../model/song-category";
import {Singer} from "../../../model/singer";
import {TopSongComponent} from "../top-song/top-song.component";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
  songForm!: FormGroup;
    id?: number ;
  @ViewChild(TopSongComponent)
  myChild!:TopSongComponent;
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
    console.log(this.showEditProduct(this.id))
  }

  showEditProduct(id:any) {
    this.http.get<Song>(`http://localhost:8080/songs/${id}`).subscribe((data) => {
      console.log(data)
      this.songForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        mp3: new FormControl(data.mp3),
        avatar: new FormControl(data.avatar),
        author: new FormControl(data.author),
        user: new FormControl(data.user),
        songCategory: new FormControl(data.songCategory),
        singer: new FormControl(data.singer)

      })
    })
  }

  onClick() {
    this.myChild.value++;
  }

}
