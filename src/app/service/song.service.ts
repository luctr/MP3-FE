import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
<<<<<<< HEAD
import {Song} from "../model/song";
import {User} from "../model/user";
=======
>>>>>>> d357834aaaa22435625711b3e04177da6e35774f

const API_URL = 'http://localhost:8080/songs'
import {environment} from "../../environments/environment";
import {song} from "../components/model/song";


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) {
  }

  getByName(name: string): Observable<song[]> {
    return this.httpClient.get<song[]>(API_URL + `/search` + `/${name}`);
  }

  API = `${environment.API_SONG}`;

  getAllSong(): Observable<song[]> {
    return this.httpClient.get<song[]>(this.API);
  }

    createSong(song: Song[]): Observable<song> {
    return this.httpClient.post<song>(this.API, song);
  }

  findByIdSong(id: number): Observable<song> {
    return this.httpClient.get<song>(`${this.API}${id}`);
  }

  updateSong(id: number, song: song): Observable<song> {
    return this.httpClient.put<song>(`${this.API}${id}`, song);
  }
<<<<<<< HEAD
  findByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API}${id}`);
  }
  findByUserName(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.API}${id}`);
  }
  findByNameUser(name: string): Observable<Song> {
    return this.http.get<Song>(`${this.API}${name}`);
  }
  updateSong(id: number, song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API}${id}`, song);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.API}${id}`);
=======

  deleteProduct(id: number): Observable<song> {
    return this.httpClient.delete<song>(`${this.API}${id}`);
  }

  getTop6New(): Observable<song[]> {
    return this.httpClient.get<song[]>(API_URL + `/top6`);
>>>>>>> d357834aaaa22435625711b3e04177da6e35774f
  }
  getByIdSong(id:number):Observable<Song>{
    return this.http.get<Song>(this.API +id)
  }

}
