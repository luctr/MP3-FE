import {Component, OnInit} from '@angular/core';
import {SingerService} from "../../../../service/singer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-singer-create',
  templateUrl: './singer-create.component.html',
  styleUrls: ['./singer-create.component.scss']
})
export class SingerCreateComponent implements OnInit {
  constructor(private singerService: SingerService,
  ) {
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

  ngOnInit() {
  }

  submit() {
    const singer = {
      name: this.singForm.value.name,
      sex: this.singForm.value.sex,
      dateOfBirth: this.singForm.value.dateOfBirth,
      story: this.singForm.value.story,
      yearOfBirth: this.singForm.value.dateOfBirth,
      MoreInformation: this.singForm.value.MoreInformation,
      skill: this.singForm.value.skill,

    }
    console.log(singer);
    this.singerService.save(singer).subscribe(result => {
        this.singForm.reset();
        alert("ok");
      }, error => {
        console.log('hello')
        console.log(error)
      }
    )
  }
}
