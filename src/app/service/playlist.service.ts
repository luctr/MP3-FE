import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {playlist} from "../components/model/Playlist";
import {Song} from "../model/song";


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private httpClient: HttpClient) { }
  private readonly API_URL = 'http://localhost:8080/playlists'

  getAll(): Observable<any>{
    return this.httpClient.get(this.API_URL)
  }
  create(playlist: any): Observable<playlist>{
    return this.httpClient.post<playlist>(this.API_URL,playlist)
  }
  findById(id: number): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/${id}`)
  }

  edit(id: number, playlist: any): Observable<any>{
    return this.httpClient.put(`${this.API_URL}/edit/${id}`,playlist)
  }
  delete(id: number): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/${id}`)
  }
  findByNameAsc(): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/topName`)
  }
  search(): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/search`)
  }
}
