import {SongCategory} from "./song-category";
import {Singer} from "./singer";
import {User} from "../components/model/User";

export interface Song {
  id?: number;
  name?: string;
  description?: string;
  mp3?: string;
  avatar?: string;
  author?: string;
  user?: User;
  songCategory?: SongCategory;
  singer?: Singer;
  count?:number;
}
