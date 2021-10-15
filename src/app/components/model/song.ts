import {SongCategory} from "./song-category";
import {Singer} from "./singer";
import {User} from "./User";


export interface Song {
  id?: number;
  name?: string;
  description?: string;
  mp3?: string;
  avatar?: string;
  author?:string
  count ?:number
  user ?: User;
  songCategory?: SongCategory;
  singer?: Singer;


}
