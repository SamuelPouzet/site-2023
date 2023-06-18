import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../Interfaces/article-categorie";
import {Article} from "../Interfaces/article";
import {ArticleService} from "../Services/article.service";

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  @Input() filter?: Categorie;
  articles: Article[] = [];
  ngOnInit() {
    console.log('filtering');
    this.getArticles()
  }

  constructor(
    private articleService: ArticleService,
  ) {
  }
  getArticles() {
    if(! this.filter) {
      throw new Error('no category in filter');
    }
    return this.articleService.filterArticlesByCategory(this.filter).subscribe(articles => this.articles = articles);
  }

}
