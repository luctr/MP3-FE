import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song/song.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Song} from "../../model/song";

@Component({
  selector: 'app-top-song',
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.scss']
})
export class TopSongComponent implements OnInit {

topSong: Song[] = [];
  topForm!: FormGroup;
  id!: number ;
  constructor(private songService: SongService,
              private router:Router,
              private activeRouter: ActivatedRoute,)
  {  this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
    // @ts-ignore
    this.id = paraMap.get('id');
    this.getCount(this.id)})}

  ngOnInit(): void {
    this.getAll();
    this.topForm = new FormGroup({
        count:new FormControl()
    })    };


  getAll() {
      this.songService.getTopSong().subscribe((data)=>{
        this.topSong = data

      })
    }

  getCount(id:number) {
    this.songService.findByIdSong(id).subscribe((data) => {
      console.log(data.count)
      this.topForm = new FormGroup({
        count: new FormControl(data.count++),


    })
  })
}
}
