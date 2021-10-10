import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  key: string ='hello';
   userName : string = '';
  constructor(public router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') != null){
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.userName = obj.name;
    }
    console.log(this.key);
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    alert('Logout Successfully!');
    window.location.reload()
  }
search(){
console.log(this.key);
  localStorage.setItem('key', this.key);
  this.router.navigateByUrl('/search').then(() => {
    location.reload();
  });
}
}
