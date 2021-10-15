import {Component, OnInit, ViewChild} from '@angular/core';
import {SongService} from "../../../../service/song/song.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
  songForm: FormGroup =new FormGroup({});
    id!: number ;
    songs3: any = [];
  constructor(private songService: SongService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = paraMap.get('id');
      this.showEditSong(this.id);
      this.getCount(this.id);
    })
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

  }

  showEditSong(id: number) {
    this.songService.findByIdSong(id).subscribe(data => {
      this.songs3 = data;
      this.songForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        mp3: new FormControl(data.mp3),
        avatar: new FormControl(data.avatar),
        author: new FormControl(data.author),
        user: new FormControl(data.user?.username),
        songCategory: new FormControl(data.songCategory?.name),
        singer: new FormControl(data.singer?.name)
      })

  })
  }
  getCount(id:any) {
    this.songService.getCount(id).subscribe((data) => {
      this.songs3 = data;
      console.log(this.id)

    })
  }

}
