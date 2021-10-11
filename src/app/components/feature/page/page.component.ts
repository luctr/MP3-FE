import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { User } from '../../model/User';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  id: string | undefined
  name: string | null | undefined;
  user: User | undefined;
  constructor(private router: Router,
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
      this.name = paramMap.get('name');
    console.log(this.name);
    this.userService.findByName(this.name).subscribe(result => {
      this.user = result
      this.id = result.id;
      console.log(result);
      this.userForm = new FormGroup({
        username: new FormControl(this.user?.username,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
        password: new FormControl(this.user?.password, [Validators.required,Validators.minLength(10)]),
        phoneNumber: new FormControl(this.user.phoneNumber,[Validators.required, Validators.pattern(/^\+84\d{9}$/)])
      })
    }, error => {
      console.log(error);
    })
    this.user = {
      id: '',
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
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    alert('Logout Successfully!');
    window.location.reload();
    this.router.navigateByUrl('/login').then(() => {
      location.reload();
    });
  }

}
