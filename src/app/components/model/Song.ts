import {SongCategory} from "./Song-category";
import {Singer} from "./Singer";
import {User} from "./User";

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
  count?: number;
}
