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


  categories: Categorie[] = [];
  defaultCategory: Categorie = {
    id: 0,
    name: 'Tous les articles',
  };

  currentCategory: Categorie = this.defaultCategory;

  listArticleSubscription: Subscription| undefined;

  constructor(
   private categorieService: ArticleCategorieService,
  ) {
  }

  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this.categorieService.getCategories().subscribe(data=> {this.categories = data._embedded.site_articles_category; });
  }

  changeFilter(filter: Categorie)
  {
    this.currentCategory = filter;
  }

}
