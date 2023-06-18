import { Injectable } from '@angular/core';
import {Categorie} from "../Interfaces/article-categorie";
import {CATEGORIE} from "../MOCK/article-categories";

@Injectable({
  providedIn: 'root'
})
export class ArticleCategorieService {

  constructor() { }

  getCategories(): Categorie[]
  {
    return CATEGORIE;
  }
}
