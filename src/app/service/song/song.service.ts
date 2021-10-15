import { Injectable } from '@angular/core';

import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song } from "../../components/model/Song";

const API_URL = 'http://localhost:8080/songs'



@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) {
  }

  getByName(name: string): Observable<Song[]> {
    return this.httpClient.get<Song[]>(API_URL + `/search` + `/${name}`);
  }

  API = `${environment.API_SONG}`;

  getAllSong(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.API);
  }

  createSong(song: Song): Observable<Song> {
    return this.httpClient.post<Song>(this.API, song);
  }

  findByIdSong(id: number): Observable<Song> {
    return this.httpClient.get<Song>(`${this.API}${id}`);
  }

  getTopSong(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.API+ `topsong`)
  }

  updateSong(id: number, song: Song): Observable<Song> {
    return this.httpClient.put<Song>(`${this.API}${id}`, song);
  }

  deleteSong(id: number): Observable<Song> {
    return this.httpClient.delete<Song>(`${this.API}${id}`);
  }

  getTop6New(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(API_URL + `/top6`);
  }

  getCount(id:any): Observable<Song[]> {
    return  this.httpClient.get<Song[]>(API_URL+ `/count`+`/${id}`);
  }
}
