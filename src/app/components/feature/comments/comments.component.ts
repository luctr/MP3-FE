import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Comment} from "../../model/Comment";

import {SongService} from "../../../service/song/song.service";
import {UserService} from "../../../service/user/user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {User} from "../../model/User";
import {Song} from "../../model/Song";
import {CommentService} from "../../../service/comment/comment.service";
let _id = 1;
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  todos: Comment[] = [];
  comments = new FormControl();
  id!: number;
  commentForm: FormGroup = new FormGroup({});
  user? : User ;
  song?: Song ;

  constructor(private commentService: CommentService,
              private songService: SongService,
              private userService: UserService,private activeRoute:ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((paraMap: ParamMap) => {
    // @ts-ignore
    this.id = paraMap.get('id');
    this.findByIdSong(this.id);
  })
    }

  ngOnInit(): void {
    if (localStorage.getItem('user') != null){
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.findByUsername(obj.name)    }
    this.getAll();
    this.commentForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      user: new FormControl(),
      song: new FormControl(),
        })
  }

  getAll() {
    this.commentService.getAllComment().subscribe(data => {
      this.todos = data;
    });
  }


  change() {
    const value = this.comments.value;
    if (value) {
      const todo: Comment = {
        name: value,
        complete: false,
        user: { id:this.user?.id,
                username:this.user?.username},
        song: { id:this.song?.id }
      };
      this.todos.push(todo);
      console.log(this.todos);
      this.createComment(todo);
      this.comments.reset();
    }
  }

  findByIdSong(id:any) {
    this.songService.findByIdSong(id).subscribe((data) => {
        this.commentForm = new FormGroup({
          id: new FormControl(data.id),
        })
    })
  }

  findByUsername(username: any) {
    this.userService.findByName(username).subscribe((data) => {
     this.user = data;
    })
  }

    createComment(value: any) {
    this.commentService.createComment(value).subscribe((data) => {
      this.commentForm.reset();
    } ,e => {
      console.log(e);
    })
  }



}
