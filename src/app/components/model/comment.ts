import {User} from "../../model/user";
import {Song} from "../../model/song";

export interface Comment {
  id?: number;
  name?: string;
  user?:User;
  song?:Song;
  complete?: boolean;
}
