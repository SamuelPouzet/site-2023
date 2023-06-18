import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../Interfaces/article";
import {ARTICLES} from "../MOCK/ArticleMock";
import {Categorie} from "../Interfaces/article-categorie";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getArticle(id: number ): Observable<Article> {
    const article = ARTICLES.find(a => a.id === id)!;
    return of(article);
  }

  filterArticlesByCategory(category: Categorie ): Observable<Article[]> {
    const article = ARTICLES.filter(a => a.categorie.id === category.id)!;
    return of(article);
  }
}
