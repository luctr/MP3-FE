import {songCategory} from "./Category";
import { User } from "./User";
import {Singer} from "./Singer";


export interface song {
  id?: number;
  name?: string;
  description?: string;
  mp3?: string;
  author?: any;
  avatar?: string;
  songCategory?: songCategory;
  users?: User;
  singer?: Singer;
}
