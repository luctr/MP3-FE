import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  createSong(song: song): Observable<song> {
    return this.httpClient.post<song>(this.API, song);
  }

  findByIdSong(id: number): Observable<song> {
    return this.httpClient.get<song>(`${this.API}${id}`);
  }

  updateSong(id: number, song: song): Observable<song> {
    return this.httpClient.put<song>(`${this.API}${id}`, song);
  }

  deleteProduct(id: number): Observable<song> {
    return this.httpClient.delete<song>(`${this.API}${id}`);
  }

  getTop6New(): Observable<song[]> {
    return this.httpClient.get<song[]>(API_URL + `/top6`);
  }

}
