import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignInForm} from "../model/SignInForm";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {SignUpForm} from "../model/SignUpForm";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  test: string = "";

  USER: string = "USER";

  loginForm: FormGroup = new FormGroup({});

  signUpForm: FormGroup = new FormGroup({});

  // @ts-ignore
  signInForm: SignInForm = {}

  // @ts-ignore
  sign: SignUpForm = {}

  message = 'Valid';


  constructor(public authService: AuthService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    }),

      this.signUpForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        phoneNumber: new FormControl(''),
      })
  }

  signUp() {
    if (this.signUpForm != null) {
      this.sign = {
        username : this.signUpForm.value.username,
        password : this.signUpForm.value.password,
        phoneNumber : this.signUpForm.value.phoneNumber,
      }
      console.log(this.sign)
      this.authService.signUp(this.sign).subscribe(result =>{
        this.router.navigateByUrl("/login")
      },error1 => alert("lỗi"))
    }


  }

  login() {
    if (this.loginForm != null) {
      console.log(this.loginForm)
      this.signInForm = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      this.authService.signIn(this.signInForm).subscribe(result => {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigateByUrl('/');
      }, error => this.message = 'Wrong username or password!')

    }
  }

}
