import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user/user.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
let _id = 1;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  todos: Comment[] = [];
  commentForm: FormGroup = new FormGroup({});
  name = new FormControl();
id:any
  constructor(private userService: UserService, private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = paraMap.get('id');
      this.getNameUser(this.id);
    })


  }
  ngOnInit(): void {

  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.name.value;
    if (value) {
      // @ts-ignore
      const comment: Comment = {
        id: _id++,
        name: value,
        complete: false
      };
      this.todos.push(comment);
      this.name.reset();
    }
  }

  getNameUser(id: any) {
    this.userService.findById(id).subscribe((data) => {
      this.commentForm = new FormGroup({
        user: new FormControl(data.username),

      })
    })
  }
}
