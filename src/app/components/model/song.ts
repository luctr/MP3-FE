import {SignUpForm} from "./SignUpForm";
import {SongCategory} from "./song-category";
import {Singer} from "./singer";

export interface Song {
  id?:number;
  name?:string;
  description?:string;
  mp3?:string;
  avatar?:string;
  author?: string;
  user ?: SignUpForm
  songCategory?:SongCategory
  singer?:Singer
}
git
