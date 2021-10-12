import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {Singer} from "../../model/singer";
import {User} from "../../../model/user";
import {SongService} from "../../../service/song.service";
import {UserService} from "../../../service/user.service";
import {SongCategoryService} from "../../../service/song-category.service";
import {SingerService} from "../../../service/singer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-song',
  templateUrl: './delete-song.component.html',
  styleUrls: ['./delete-song.component.scss']
})
export class DeleteSongComponent implements OnInit {
  imgSrc: any;
  songCategoryId : any;
  singerId :any;
  mp3Src: null;
  selectedImage: null;
  urlMP3: any;
  urlAvatar: any;
  id:any;
  // @ts-ignore
  songCategories : Song[];
  // @ts-ignore
  singers : Singer[];
  // @ts-ignore
  users1 : User
  constructor( private songService: SongService,
               private userService:UserService,
               private songCategoryService: SongCategoryService,
               private singer : SingerService,
               private router :Router,
               private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
    });
  }
 songForm : FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.getSongCategory();
    this.getSinger();
    this.songForm = new FormGroup({
      name : new FormControl(''),
      description : new FormControl(''),
      mp3 : new FormControl(''),
      avatar : new FormControl(''),
      author : new FormControl(''),
      user : new FormControl(),
      songCategory : new FormControl(),
      singer : new FormControl(),
      count : new FormControl(0),
    })
    this.getByIdSong(this.id)

  }

  private getSongCategory() {
    this.songCategoryService.getAllSongCategory().subscribe((data) =>{
      this.songCategories =data
      console.log(data)
    })
  }

  private getSinger() {
    this.singer.getAll().subscribe((data) =>{
      this.singers = data
      console.log('singer', data)
    })
  }
  deleteSong(){
    this.songService.deleteSong(this.id).subscribe(data => {
      this.router.navigate(['/song/list'])
    }) ;
  }

  private getByIdSong(id: number) {
    this.songService.getByIdSong(id).subscribe(data =>{
      console.log('data' ,data)
      this.songForm = new FormGroup({
        name : new  FormControl(data.name),
        description : new  FormControl(data.description),
        mp3 : new FormControl(data.mp3),
        avatar : new FormControl(data.avatar),
        author : new FormControl(data.author),
        user : new FormControl(data.user),
        songCategory : new FormControl(data.songCategory?.id),
        singer : new FormControl(data.singer?.id),
        count : new FormControl(data.count),
      });  this.songCategoryId = data.songCategory?.id,
        this.singerId =data.singer?.id
    });


  }
}
