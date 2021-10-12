import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Comment} from "../../model/comment";
let _id = 1;
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  todos: Comment[] = [];
  name = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.name.value;
    if (value) {
      const todo: Comment = {
        id: _id++,
        name: value,
        complete: false
      };
      this.todos.push(todo);
      this.name.reset();
    }
  }
}
