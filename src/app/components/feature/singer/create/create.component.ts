import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {single} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SingerService} from "../../../../service/singer/singer.service";
import {Singer} from "../../../model/singer";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  singerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    sex: new FormControl(),
    dateOfBirth: new FormControl(),
    story: new FormControl(),
    yearOfBirth: new FormControl(),
    musicBand: new FormControl(),
    MoreInformation: new FormControl(),

  });
  constructor(private singerService: SingerService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  submit() {
    this.http.post<Singer>('http://localhost:8080/singer', this.singerForm.value).subscribe((data) => {
      alert("thêm thành công - ")
      this.router.navigate(["/singer"])
    })

  }
}
