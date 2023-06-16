import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../Services/article.service";
import {Article} from "../Interfaces/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  articles: Article[] = [];
  constructor(
   private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    return this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

}
