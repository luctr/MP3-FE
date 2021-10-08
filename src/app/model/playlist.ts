import {User} from "./user";
import {SongCategory} from "./song-category";
import {Song} from "./song";

export interface Playlist {
  id?: string;
  name?: string;
  songCategory?: SongCategory;
  description?: string;
  user?: User;
  song?: Song[];
}
