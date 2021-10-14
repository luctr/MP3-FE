import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  id: string | undefined;
  name: string | undefined;
  user: User | undefined;
  constructor(
              private userService: UserService,
              private ac: ActivatedRoute
  ) {
  }

  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
  })

  ngOnInit(): void {
    this.ac.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.name = paramMap.get('name');
    console.log(this.name);
    // @ts-ignore
      this.userService.findByName(this.name).subscribe(result => {
      this.user = result
      // @ts-ignore
        this.id = result.id;
      console.log(result);
      this.userForm = new FormGroup({
        username: new FormControl(this.user?.username,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
        password: new FormControl(this.user?.password, [Validators.required,Validators.minLength(10)]),
        phoneNumber: new FormControl(this.user?.phoneNumber,[Validators.required, Validators.pattern(/^\+84\d{9}$/)])
      })
    }, error => {
      console.log(error);
    })
    // @ts-ignore
      this.user = {
      username: '',
      password: '',
      phoneNumber: '',
    }
  })}

  updateUser() {
    console.log("abc")
    const user = this.userForm.value;
    console.log(user);
// @ts-ignore
    this.userService.update(this.id, user).subscribe(result => {
      alert("Update ok");
    }, error => {
      console.log(error);
    })
  }

}
