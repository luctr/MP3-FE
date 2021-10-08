import {User} from "./user";
import {SongCategory} from "./song-category";
import {Singer} from "./singer";

export interface Song {
  id?: string;
  name?: string;
  description?: string;
  mp3?: string;
  avatar?: string;
  author?: string;
  user?: User;
  songCategory?: SongCategory;
  singer?: Singer;
}
