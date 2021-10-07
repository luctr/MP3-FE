import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   userName : string = '';
  constructor() { }

  ngOnInit(): void {
    let obj = JSON.parse(<string>localStorage.getItem('user'));
    this.userName = obj.name;

  }

}
