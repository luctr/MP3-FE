import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {
  playlistForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    user: new FormControl(),
    song : new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
