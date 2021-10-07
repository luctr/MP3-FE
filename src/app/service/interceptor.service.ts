import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('token');
    console.log('fsdfdsfsfsfsd.log');
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: accessToken
        }
      })
    } else {
      console.log('loi token')
      // window.location("/login")
    }
    return next.handle(request);
  }
}
