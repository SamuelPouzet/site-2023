import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../Services/article.service";
import {Article} from "../Interfaces/article";
import {Categorie} from "../Interfaces/article-categorie";
import {ArticleCategorieService} from "../Services/article-categorie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  articles: Article[] = [];
  categories: Categorie[] = [];
  defaultCategory: Categorie = {
    id: 0,
    name: 'Tous les articles',
  };

  currentCategory: Categorie = this.defaultCategory;

  listArticleSubscription: Subscription| undefined;

  constructor(
   private articleService: ArticleService,
   private categorieService: ArticleCategorieService,
  ) {
  }

  ngOnInit() {
    this.getCategories();
    this.listArticleSubscription = this.getArticles();
  }

  getArticles() {
    return this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

  getCategories() {
    this.categories = this.categorieService.getCategories();
  }

  filterByCategory(category: Categorie){
    this.currentCategory = category;
    if(this.listArticleSubscription !== undefined) {
      this.listArticleSubscription.unsubscribe();
    }
    if(category === this.defaultCategory) {
      this.listArticleSubscription = this.getArticles();
    }else{
      this.listArticleSubscription = this.articleService.filterArticlesByCategory(category).subscribe(articles => this.articles = articles);
    }

  }
}
