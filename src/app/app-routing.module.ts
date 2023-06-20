import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ArticleComponent} from "./article/article.component";
import {MusiqueComponent} from "./musique/musique.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'articles', component: ArticlesComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'musique', component: MusiqueComponent},

  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
