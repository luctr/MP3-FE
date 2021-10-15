import {songCategory} from "./Category";
import {user} from "./User";
import {Playlist} from "../../model/playlist";

export interface song {
  id: number;
  name: string;
  description: string;
  mp3: string;
  avatar: string;
  songCategory: songCategory;
  users: user;
  playlist:Playlist
}
