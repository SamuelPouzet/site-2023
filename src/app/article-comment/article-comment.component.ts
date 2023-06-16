import {Component, OnInit} from '@angular/core';
import {ArticleCommentService} from "../Services/article-comment.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleComment} from "../Interfaces/article-comment";

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css']
})
export class ArticleCommentComponent implements OnInit {

  comments: ArticleComment[] = [];

  constructor(
    private commentService: ArticleCommentService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getComments();
  }

  getComments(){
    let ArticleId =  Number(this.route.snapshot.paramMap.get('id'));
    this.commentService.getCommentsByArticle(ArticleId)
      .subscribe(comments => this.comments = comments);
  }
}
