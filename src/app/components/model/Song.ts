import {songCategory} from "./Category";
import {user} from "./User";

export interface song {
  id: number;
  name: string;
  description: string;
  mp3: string;
  avatar: string;
  songCategory: songCategory;
  users: user;
}
