import {Song} from "../../model/song";
import {User} from "../../model/user";

export interface playlist {
  id : number;
  description : string;
  name : string;
  users: User;
  song: Song;
}
