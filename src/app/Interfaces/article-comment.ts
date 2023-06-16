import {User} from "./user";

export interface ArticleComment {
  id: number;
  article: number;
  content: string;
  owner: User;
  date: string;
}
