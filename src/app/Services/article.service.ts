import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../Interfaces/article";
import {ARTICLES} from "../MOCK/ArticleMock";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }
}
