import {Component, OnInit} from '@angular/core';
import {Singer} from "../../../model/singer";
import {ActivatedRoute} from "@angular/router";
import {SingerService} from "../../../service/singer.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.scss']
})
export class SingerComponent implements OnInit {
  singersList: Singer[] = [];

  constructor(private singerService: SingerService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.singerService.getAll().subscribe(singList => {
      this.singersList = singList;
      console.log(singList);
    }, error => {
      console.log(error)
    })
  }

}
