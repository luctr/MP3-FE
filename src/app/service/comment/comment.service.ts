import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../../components/model/Song";
import {environment} from "../../../environments/environment";
import {Comment} from "../../components/model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  API = `${environment.API_COMMENT}`;

  getAllComment(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.API);
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.API, comment);
  }

  findByIdComment(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(`${this.API}${id}`);
  }


  updateComment(id: number, comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(`${this.API}${id}`, comment);
  }

  deleteComment(id: number): Observable<Comment> {
    return this.httpClient.delete<Comment>(`${this.API}${id}`);
  }
}
