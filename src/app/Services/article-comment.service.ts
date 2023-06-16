import {Injectable} from '@angular/core';
import {COMMENT} from "../MOCK/article-comment";
import {Observable, of} from "rxjs";
import {ArticleComment} from "../Interfaces/article-comment";

@Injectable({
  providedIn: 'root'
})
export class ArticleCommentService {

  constructor() {
  }

  getCommentsByArticle(articleId: number): Observable<ArticleComment[]> {
      const comment = COMMENT.filter(comment => comment.article === articleId)!;
      return of(comment);

  }
}
