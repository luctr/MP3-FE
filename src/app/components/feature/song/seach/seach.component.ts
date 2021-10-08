import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {
  songForm: FormGroup;
  id?: string;
  constructor(private songService: SongService, private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
