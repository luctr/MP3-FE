import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  name = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }


  toggleTodo(i: number) {
    this.comments[i].complete = !this.comments[i].complete;
  }

  change() {
    const value = this.name.value;
    if (value) {
      const comment: Comment = {
        id: _id++,
        name: value,
        complete: false
      };
      this.comments.push(comment);
      this.name.reset();
    }
  }
}

