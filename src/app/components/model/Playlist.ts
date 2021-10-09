import {user} from "./User";
import {song} from "./Song";

export interface playlist {
  id : number;
  description : string;
  name : string;
  users: user;
  song: song;
}
