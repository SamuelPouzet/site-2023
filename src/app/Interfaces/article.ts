import {User} from "./user";
import {Categorie} from "./article-categorie";

export interface Article {
  id: number;
  name: string;
  categorie: Categorie;
  content: string;
  imgUrl: string;
  author: User;
  date_creation: string;
}
