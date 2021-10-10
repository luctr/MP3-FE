import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Singer} from "../model/singer";
const API_URL = 'http://localhost:8080/songs'
@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }
  getByName(name: string): Observable<Singer[]> {
    return this.httpClient.get<Singer[]>(API_URL+'/search' +`/${name}`);
  }
}
