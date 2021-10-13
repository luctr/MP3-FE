import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Singer} from "../components/model/Singer";
const API = 'http://localhost:8080/singer'
@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private httpClient: HttpClient) { }
  private readonly API_URL = 'http://localhost:8080/singer'
  getAll(): Observable<any>{
    return this.httpClient.get(this.API_URL)
  }
  create(singer: Singer ): Observable<Singer>{
    return this.httpClient.post<Singer>(this.API_URL,singer)
  }
  findById(id: number): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/${id}`)
  }
  edit(id: number,singer: Singer): Observable<any>{
    return this.httpClient.put(`${this.API_URL}/${id}`,singer)
  }
  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.API_URL}/${id}`)
  }
  search(name: string): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/search/${name}`)
  }
  top7New(): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/top7`)
  }
  getByName(name: string): Observable<Singer[]> {
    return this.httpClient.get<Singer[]>(API+'/search' +`/${name}`);
  }
}
