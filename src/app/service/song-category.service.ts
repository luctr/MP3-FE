import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Song } from '../components/model/Song';
import { SongCategory } from '../components/model/Song-Category';
@Injectable({
  providedIn: 'root'
})
export class SongCategoryService {
  API = `${environment.API_SONG_CATEGORY}`;

  constructor(private http: HttpClient) {
  }

  getAllSongCategory(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API );
  }

  createSongCategory(songCategory: SongCategory): Observable<SongCategory> {
    return this.http.post<SongCategory>(this.API ,songCategory );
  }

  findByIdSongCategory(id: number): Observable<SongCategory> {
    return this.http.get<SongCategory>(`${this.API}${id}`);
  }

  updateSongCategory(id: number, songCategory: SongCategory): Observable<SongCategory> {
    return this.http.put<SongCategory>(`${this.API}${id}`, songCategory);
  }

  deleteSongCategory(id: number): Observable<SongCategory> {
    return this.http.delete<SongCategory>(`${this.API}${id}`);
  }

}
