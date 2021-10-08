import { Component, OnInit } from '@angular/core';
import {Singer} from "../../../../model/singer";
import {SingerService} from "../../../../service/singer.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  singers: Singer[] = [];

  constructor(private singerService: SingerService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.http.get<Singer>('http://localhost:8080/singer',this.singers.values()).subscribe((data) => {
      this.singers = singers;
    });
  }}
