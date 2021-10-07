import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignInForm} from "../model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  // @ts-ignore
  signInForm:SignInForm= {}

  message = 'Valid';


  constructor(public authService:AuthService,
              public router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
  }
  signUp() {

  }



  login(){
    if (this.loginForm != null){
      this.signInForm = {
        username : this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      // const header = {
      //   "Authorization": localStorage.getItem("token")
      // }



      this.authService.signIn(this.signInForm).subscribe(result=>{
        localStorage.setItem('token',result.token);
        localStorage.setItem('user',JSON.stringify(result));
        this.router.navigate([""]);
      },error   =>this.message = 'Wrong username or password!')
    }
  }

}
