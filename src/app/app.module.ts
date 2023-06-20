import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ArticlesComponent} from './articles/articles.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ArticleComponent} from './article/article.component';
import {ArticleCommentComponent} from './article-comment/article-comment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {ListArticlesComponent} from './list-articles/list-articles.component';
import {MusiqueComponent} from './musique/musique.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    PagenotfoundComponent,
    ArticleComponent,
    ArticleCommentComponent,
    ListArticlesComponent,
    MusiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
