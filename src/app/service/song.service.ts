import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/songs'
import {environment} from "../../environments/environment";
import {Song} from "../components/model/Song";



@Injectable({
  providedIn: 'root'
})
export class SongService {
  [x: string]: any;

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

  updateSong(id: number, song: Song): Observable<Song> {
    return this.httpClient.put<Song>(`${this.API}${id}`, song);
  }

  deleteProduct(id: number): Observable<Song> {
    return this.httpClient.delete<Song>(`${this.API}${id}`);
  }

  getTop6New(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(API_URL + `/top6`);
  }
  getAllByUser_id(id: number): Observable<Song[]> {
    return this.httpClient.get<Song[]>(API_URL + `/user` + `/${id}`);
  }
}
