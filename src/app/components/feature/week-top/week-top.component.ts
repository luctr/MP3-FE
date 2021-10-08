import { Component, OnInit } from '@angular/core';
import {singer} from "../../model/Singer";
import {SingerService} from "../../../service/singer.service";

@Component({
  selector: 'app-week-top',
  templateUrl: './week-top.component.html',
  styleUrls: ['./week-top.component.scss']
})
export class WeekTopComponent implements OnInit {
  singers: singer[] = [];
  constructor(private singerService: SingerService) { }

  ngOnInit(): void {
    this.getTop7()
  }
  getTop7(){
    this.singerService.getAll().subscribe(data => {
      this.singers = data;
    })
  }
}
