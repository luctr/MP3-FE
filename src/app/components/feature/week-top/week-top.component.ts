import { Component, OnInit } from '@angular/core';

import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../model/song";

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {

  }


}
