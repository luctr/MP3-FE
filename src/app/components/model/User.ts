import {Role} from "./role";

export interface user {
  username: string;
  password: string;
  phoneNumber: string;
  roles: Role;
}
