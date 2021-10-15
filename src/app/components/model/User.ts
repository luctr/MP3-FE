import {Role} from "./Role";
export interface User {
  id?: number;
  username?: string;
  password?: string;
  phoneNumber?: string;
  roles?: Role;
}
