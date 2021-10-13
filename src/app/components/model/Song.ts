
import { User } from "./User";
import {Singer} from "./Singer";
import {SongCategory} from "./Song-Category";


export interface Song {
  id?: number;
  name?: string;
  description?: string;
  mp3?: string;
  author?: any;
  avatar?: string;
  songCategory?: SongCategory;
  users?: User;
  singer?: Singer;
}
