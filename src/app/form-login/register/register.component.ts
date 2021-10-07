import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {SignInForm} from "../../components/model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  // @ts-ignore
  signInForm:SignInForm= {}

  message = 'Valid';



  constructor(
              public authService:AuthService) {
  }

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

      const header = {
        "Authorization": localStorage.getItem("token")
      }



      this.authService.signIn(this.signInForm).subscribe(result=>{
        localStorage.setItem('token',result.token);
        localStorage.setItem('user',JSON.stringify(result));
        // this.router.navigateByUrl('/');
      },error   =>this.message = 'Wrong username or password!')
    }
  }
}
