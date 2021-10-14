import {Song} from "./Song";
import {User} from "./User";

export interface playlist {
  id ?: number;
  description ?: string;
  name? : string;
  users?: User;
  song?: Song;
}
