import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../components/model/song";
=======
>>>>>>> a9cbeb2d56318597a39067c2d0e6e96cc81ee1a8

@Injectable({
  providedIn: 'root'
})
export class SongService {
<<<<<<< HEAD
  API = `${environment.API_SONG}`;

  constructor(private http: HttpClient) {
  }

  getAllSong(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API );
  }

  createSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.API ,song );
  }

  findByIdSong(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.API}${id}`);
  }

  updateSong(id: number, song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API}${id}`, song);
  }

  deleteProduct(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.API}${id}`);
  }
=======

  constructor() { }
>>>>>>> a9cbeb2d56318597a39067c2d0e6e96cc81ee1a8
}
