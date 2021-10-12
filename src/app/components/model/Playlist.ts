import { song } from "./song";
import { User } from "./User";

export interface playlist {
  id : number;
  description : string;
  name : string;
  users: User;
  song: song;
}
