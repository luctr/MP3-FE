import { Component, OnInit } from '@angular/core';
import {SingerService} from "../../../../service/singer.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Singer} from "../../../model/singer";

@Component({
  selector: 'app-singer-delete',
  templateUrl: './singer-delete.component.html',
  styleUrls: ['./singer-delete.component.scss']
})
export class SingerDeleteComponent implements OnInit {
  // @ts-ignore
  singer: Singer ;
  id: string | undefined;
  constructor(private singerService: SingerService, private ac: ActivatedRoute) {
  }
  singForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    sex: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    story: new FormControl('', [Validators.required, Validators.minLength(30)]),
    yearOfBirth: new FormControl(),
    musicBand: new FormControl(),
    MoreInformation: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  ngOnInit(): void {
    this.ac.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = paramMap.get('id');
      // @ts-ignore
      this.singerService.getById(this.id).subscribe(result => {
          this.singer = result;
          this.singForm = new FormGroup({
            name: new FormControl(this.singer.name, [Validators.required, Validators.minLength(6)]),
            sex: new FormControl(this.singer.sex, [Validators.required]),
            dateOfBirth: new FormControl(this.singer.dateOfBirth, [Validators.required]),
            story: new FormControl(this.singer.story, [Validators.required, Validators.minLength(30)]),
            musicBand: new FormControl(this.singer.musicBand),
            MoreInformation: new FormControl(this.singer.MoreInformation, [Validators.required, Validators.minLength(6)]),
          })
          console.log(result);
        }, error => {
          console.log(error);
        }
      );
    });
    this.singer = {
      name: 'hell',
      sex: 'hell',
      dateOfBirth: 'hell',
      story: 'hell',
      musicBand: 'hell',
      MoreInformation: 'hell',
    }
  }
  delete(){
    // @ts-ignore
    this.singerService.delete(this.id).subscribe(abc =>{
      alert('Edit Ok')
      history.back()
    })
  }
}

