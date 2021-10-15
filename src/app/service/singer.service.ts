import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Singer} from "../components/model/singer";
const API_URL = 'http://localhost:8080/singer'
@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http:HttpClient) { }
  getById(id: string): Observable<Singer> {
    return this.http.get<Singer>(API_URL +`/${id}`);
  }
  getAll(): Observable<Singer[]> {
    return this.http.get<Singer[]>(API_URL);
  }

  save(singer: Singer): Observable<Singer> {
    return this.http.post<Singer>(API_URL,singer);
  }
  delete(id: string) {
    return this.http.delete(API_URL + `/${id}`);
  }
  update(id: string, singer: Singer): Observable<Singer> {
    return this.http.put<Singer>(API_URL + `/${id}`, singer);
  }
}
