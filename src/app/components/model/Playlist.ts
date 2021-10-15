import {User} from "./User";
import {Song} from "./song";

export interface Playlist {
  id : number;
  description : string;
  name : string;
  users: User;
  song: Song;
}
