import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../Services/article.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Article} from "../Interfaces/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article| undefined;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getArticle()
  }

  getArticle() {
    let id= Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  goBack() {
    this.location.back();
  }
}
