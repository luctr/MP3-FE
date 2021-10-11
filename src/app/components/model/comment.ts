import {Song} from "./song";
import {User} from "./user";

export interface Comment {
  id?: number;
  name?: string;
  user?:User;
  song?:Song;
  complete?: boolean;
}
