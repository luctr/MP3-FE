import { Injectable } from '@angular/core';
import {Singer} from "../model/singer";

@Injectable({
  providedIn: 'root'
})
export class SingerService {
singer: Singer[] = [];
  constructor() { }
}
