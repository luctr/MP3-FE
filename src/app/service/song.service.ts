import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../components/model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API = `${environment.API_SONG}`;

  constructor(private http: HttpClient) {
  }

  getAllSong(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API );
  }

  createSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.API ,song );
  }

  updateSong(id: number, song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API}${id}`, song);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.API}${id}`);
  }
  getByIdSong(id:number):Observable<Song>{
    return this.http.get<Song>(this.API +id)
  }

}
