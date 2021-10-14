

import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {SongService} from "../../../service/song.service";
import {UserService} from "../../../service/user.service";

import {SongCategoryService} from "../../../service/song-category.service";
import {SingerService} from "../../../service/singer.service";

import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {Component, OnInit} from "@angular/core";
import { Song } from "../../model/Song";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  imgSrc: any;
  mp3Src: any;
  selectedImageMP3: any;
  selectedImageAvatar: any;
  urlMP3: any;
  urlAvatar: any;
  id:any;
  idUser :any;
  // @ts-ignore
  songCategories : Song[];
  // @ts-ignore
  singers : Singer[];

  songForm : FormGroup = new FormGroup({
    name : new FormControl(),
    description : new FormControl(),
    author: new FormControl(),
    user : new FormControl(),
    songCategory : new FormControl(),
    singer : new FormControl(),
    count : new FormControl(),
  })
  songs: Song[] = [];

  song: Song = {
    // @ts-ignore
    id: 0,
    name: '',
    description: '',
    mp3: '',
    avatar: '',
    author: '',
    user: {
      id: this.songForm.value.user
    },
    songCategory: {
      // @ts-ignore
      id: this.songForm.value.songCategory
    },
    singer: {
      id: this.songForm.value.singer
    },
    count:0
  };


  constructor(public router: Router,
              private storage: AngularFireStorage,
              private songService: SongService,
              private userService:UserService,
              private songCategoryService: SongCategoryService,
              private singer : SingerService) {
  }
  key: string ='hello';

  ngOnInit(): void {

    this.getSongCategory();
    this.getSinger();
    this.idUser = localStorage.getItem('user');
    this.songForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      mp3: new FormControl(''),
      avatar: new FormControl(''),
      author: new FormControl(''),
      user: new FormControl(),
      songCategory: new FormControl(),
      singer: new FormControl(),
      count: new FormControl(0),
    })
    if (localStorage.getItem('user') != null) {
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.userName = obj.name;
      this.findByUserName(this.userName);
    }
  }
  subMp3() {
    if (this.selectedImageMP3 != null) {
      const filePath = `avatar/${this.selectedImageMP3.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImageMP3).snapshotChanges().pipe(
        finalize(() => (
          fileRef.getDownloadURL().subscribe(url => {
            this.urlMP3 = url
          })))
      )
        .subscribe();
    }
  }

  showPreviewMp3( event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedImageMP3 = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => this.mp3Src = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImageMP3 = event.target.files[0];
      this.subMp3()
    } else {
      this.selectedImageMP3 = null;
    }
  }

  subAvatar() {
    if (this.selectedImageAvatar != null) {
      const filePath = `avatar/${this.selectedImageAvatar.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImageAvatar).snapshotChanges().pipe(
        finalize(() => (
          fileRef.getDownloadURL().subscribe(url => {
            this.urlAvatar = url
          })))
      )
        .subscribe();
    }
  }

  showPreviewAvatar( event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedImageAvatar = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImageAvatar = event.target.files[0];
      this.subAvatar()
    } else {
      this.selectedImageAvatar= null;
    }
  }
  createSong(){

    if (this.songForm != null){
      this.song= {

        name : this.songForm.value.name,
        description : this.songForm.value.description,
        mp3 : this.urlMP3,
        avatar:this.urlAvatar,
        author:this.songForm.value.author,
        user :{
          id : this.id
        },
        songCategory :{
          // @ts-ignore
          id: this.songForm.value.songCategory
        },
        singer:{
          id: this.songForm.value.singer
        },
        count:this.songForm.value.count
      }
      // @ts-ignore
      this.songService.createSong(this.songs).subscribe(data =>{
        this.router.navigate([''])
      })
    }}
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    alert('Logout Successfully!');
    window.location.reload()
  }
  findByUserName(userName: string){
    this.userService.findByUserName(userName).subscribe(data =>{
      console.log('DATA')
      console.log(data)
      this.id = data.id

      console.log('userId', this.id)
    })
  }
  search() {
    // @ts-ignore
    this.key = document.getElementById('key').value;
    console.log(this.key);
    localStorage.setItem('key', this.key);
    this.router.navigateByUrl('/page-search').then(() => {
      window.location.reload();
    });
  }
  private getSongCategory() {
    this.songCategoryService.getAllSongCategory().subscribe((data) =>{
      this.songCategories = data
      console.log("category"+data)
    })
  }

  private getSinger() {
    this.singer.getAll().subscribe((data) =>{
      this.singers = data
      console.log('singer', data)
    })
  }
}
