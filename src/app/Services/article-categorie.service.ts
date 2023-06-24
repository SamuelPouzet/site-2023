import { Injectable } from '@angular/core';
import {Categorie} from "../Interfaces/article-categorie";
import {catchError, Observable, of, tap} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnexionService } from "../connexion.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleCategorieService {

  categoryUrl:string = 'http://localhost:4350/site_articles_category';

  constructor(
    private http: HttpClient,
    private connexion: ConnexionService
  ) {}

  getCategories(): Observable<any>
  {
    let url = this.connexion.getUrl('site_articles_category');
    let headers = this.connexion.getHttpOptions();

    return this.http.get<any>(url, headers );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
