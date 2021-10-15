import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SongService} from "../../../service/song.service";
import {UserService} from "../../../service/user.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {SongCategoryService} from "../../../service/song-category.service";
import {SingerService} from "src/app/service/singer.service";
import {finalize} from "rxjs/operators";
import {User} from "../../model/User";
import {Singer} from "../../model/singer";
import {Song} from "../../model/song";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  img: any;
  selectedImage: any;
  url: any;
  mp3: any;
  id: any;
  idUser: any;
  // @ts-ignore
  songCategories: SongCategory[];
  // @ts-ignore
  singers: Singer[];
  // @ts-ignore  ;'
  users1: User[]
  songForm: FormGroup = new FormGroup({
    name: new FormControl(Validators.required),
    description: new FormControl(),
    author: new FormControl(Validators.required),
    user: new FormControl(),
    songCategory: new FormControl(Validators.required),
    singer: new FormControl(Validators.required),
    count: new FormControl(),
  })
  songs: Song[] = [];

  // @ts-ignore
  song: Song = {
    id: 0,
    name: '',
    description: '',
    mp3: '',
    avatar: '',
    author: '',
    user: { // @ts-ignore
      id: this.songForm.value.user
    },
    songCategory: {
      id: this.songForm.value.songCategory
    },
    singer: {
      id: this.songForm.value.singer
    },
    count: 0
  };


  constructor(public router: Router,
              private storage: AngularFireStorage,
              private songService: SongService,
              private userService: UserService,
              private songCategoryService: SongCategoryService,
              private singer: SingerService,
  ) {
  }

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

  sub(typeFile: string) {
    if (this.selectedImage != null) {
      const filePath = `avatar/${this.selectedImage.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (
          fileRef.getDownloadURL().subscribe(url => {
            if (typeFile === "IMG") {
              this.url = url
            } else {
              this.mp3 = url
            }

          })))
      )
        .subscribe();
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedImage = event.target.files[0];

      if (this.selectedImage.type.indexOf("mpeg") === -1) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.img = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
        this.sub("IMG");
        return;
      }
      this.sub("Audio")
    } else {
      this.selectedImage = null;
    }
  }

  createSong() {

    if (this.songForm != null) {
      this.song = {

        name: this.songForm.value.name,
        description: this.songForm.value.description,
        mp3: this.mp3,
        avatar: this.url,
        author: this.songForm.value.author,
        user: { // @ts-ignore
          id: this.id
        },
        songCategory: {
          id: this.songForm.value.songCategory
        },
        singer: {
          id: this.songForm.value.singer
        },
        count: this.songForm.value.count
      }
      this.songService.createSong(this.song).subscribe((data: Song) => {
        this.songForm.reset();
        this.router.navigate(['/song/list']);
      });
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    alert('Logout Successfully!');
    window.location.reload()
  }

  findByUserName(userName: string) {
    this.userService.findByUserName(userName).subscribe(data => {
      console.log('DATA')
      console.log(data)
      // @ts-ignore
      this.id = data.id
      console.log('userId', this.id)
    })
  }

  private getSongCategory() {
    this.songCategoryService.getAllSongCategory().subscribe(data => {
      this.songCategories = data
    })
  }


  private getSinger() {
    this.singer.getAll().subscribe((data) => {
      this.singers = data
      console.log('singer', data)
    })
  }
}
