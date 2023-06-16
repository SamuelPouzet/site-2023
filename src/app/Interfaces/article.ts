import {User} from "./user";

export interface Article {
  id: number;
  name: string;
  content: string;
  imgUrl: string;
  author: User;
  date_creation: string;
}
