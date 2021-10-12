 import { Component, OnInit } from '@angular/core';
 import {Song} from "../../../model/song";
 import {Singer} from "../../model/singer";
 import {FormControl, FormGroup} from "@angular/forms";
 import {ActivatedRoute, ParamMap, Router} from "@angular/router";
 import {AngularFireStorage} from "@angular/fire/compat/storage";
 import {SongService} from "../../../service/song.service";
 import {UserService} from "../../../service/user.service";
 import {SongCategoryService} from "../../../service/song-category.service";
 import {SingerService} from "../../../service/singer.service";
 import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  imgSrc: any;
  mp3Src: any;
  selectedImageMP3: any;
  selectedImageAvatar: any;
  urlMP3: any;
  id: any;
  urlAvatar: any;
  idSongCategory:any;
  idSinger:any;
  // @ts-ignore
  songCategories : Song[];
  // @ts-ignore
  singers : Singer[];

  songs : Song ={};
  songFormEdit : FormGroup = new FormGroup({})
  constructor(
    public router: Router,
    private storage: AngularFireStorage,
    private songService: SongService,
    private userService:UserService,
    private songCategoryService: SongCategoryService,
    private singer : SingerService, private activeRouter: ActivatedRoute
    ) {
      this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
        this.id = paraMap.get('id');
      });
  }

  ngOnInit(): void {
    this.getAllSongCategory();
    this.idSongCategory = Number(localStorage.getItem('idSongCate'));
    this.getAllSinger();
    this.idSinger= Number(localStorage.getItem('idSongCate'));
    this.getByIdSong(this.id)
   this.songFormEdit = new FormGroup({
     name : new FormControl(''),
     description : new FormControl(''),
     author : new FormControl(''),
     songCategory : new FormControl(),
     singer : new FormControl(),
   })
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

  private getAllSongCategory () {
    this.songCategoryService.getAllSongCategory().subscribe((data) =>{
      this.songCategories =data
      console.log(data)
    })
  }

  private getAllSinger() {
    this.singer.getAll().subscribe((data) =>{
      this.singers = data
      console.log('singer', data)
    })
  }
  private getByIdSong(id: number) {
    this.songService.getByIdSong(id).subscribe(data =>{
      this.songFormEdit = new FormGroup({
        name : new  FormControl(data.name),
        description : new  FormControl(data.description),
        mp3 : new FormControl(data.mp3),
        avatar : new FormControl(data.avatar),
        author : new FormControl(data.author),
        user : new FormControl(data.user),
        songCategory : new FormControl(data.songCategory?.id),
        singer : new FormControl(data.singer?.id),
        count : new FormControl(data.count),
      });
    });


  }
  name : string = '';
  edit(){
    this.songs = {
      id: this.id,
      name  : this.songFormEdit.value.name,
      description  : this.songFormEdit.value.name,
      mp3  : this.songFormEdit.value.name,
      avatar  : this.songFormEdit.value.name,
      author  : this.songFormEdit.value.name,
      songCategory :this.songFormEdit.value.songCategory = {
        id : this.songFormEdit.value.songCategory
      },
      singer :this.songFormEdit.value.singer = {
        id : this.songFormEdit.value.singer
      }
    }
    // @ts-ignore
    this.songService.updateSong(this.id,this.songs).subscribe(data =>{
      this.router.navigate(['/song/list'])
    })
    this.name = this.songFormEdit.value.singer;
    console.log(this.name);
  }
}
