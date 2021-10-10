import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SignUpForm} from "../../components/model/SignUpForm";
import {Observable} from "rxjs";
import {SignInForm} from "../../components/model/SignInForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOGIN + '/signup';
  private API_SIGNIN = environment.API_LOGIN + '/signin';

  constructor(private http: HttpClient) {

  }

  signUp(signUp: SignUpForm):Observable<any>{
    return this.http.post(this.API_SIGNUP,signUp)
  }
  signIn(user: SignInForm): Observable<any>{

    const header = {
      Authorization: localStorage.getItem("token")

    }
    // @ts-ignore
    return this.http.post(this.API_SIGNIN, user, header);
  }


}
