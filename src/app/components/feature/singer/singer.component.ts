import {Component, OnInit} from '@angular/core';
import { SingerService } from 'src/app/service/singer.service';
import { Singer } from '../../model/Singer';

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
    this.singerService.getAll().subscribe(singList => {
      this.singersList = singList;
      console.log(singList);
    }, error => {
      console.log(error)
    })
  }

}
