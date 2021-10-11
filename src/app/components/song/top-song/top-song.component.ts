import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song/song.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  { }

  ngOnInit(): void {
    this.getAll();
    this.topForm = new FormGroup({
        count:new FormControl()
    })
    this.activeRouter.params.subscribe((data) => this.id = data.name);
    this.getCount(this.id);

    };


  getAll() {
      this.songService.getTopSong().subscribe((data)=>{
        this.topSong = data
        return data;
      })
    }

  getCount(id:number) {
    this.songService.findByIdSong(id).subscribe((data) => {
      this.topForm.get('count')?.setValue(data.count++);

    })
  }

}
