import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   userName : string = '';
  constructor(public router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') != null){
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.userName = obj.name;
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    alert('Logout Successfully!');
    window.location.reload()
  }

}
