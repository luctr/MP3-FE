import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-song',
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.scss']
})
export class TopSongComponent implements OnInit {
value = 0;
  constructor() { }

  ngOnInit(): void {
  }

}