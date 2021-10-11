import {Song} from "./song";
import {User} from "./user";

export interface playlist {
  id ?: number;
  description ?: string;
  name? : string;
  users?: User;
  song?: Song;
}
