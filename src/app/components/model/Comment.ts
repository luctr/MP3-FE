import {Song} from "./Song";
import {User} from "./User";

export interface Comment {
  id?: number;
  name?: string;
  user?:User;
  song?:Song;
  complete?: boolean;
}
