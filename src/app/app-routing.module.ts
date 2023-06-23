import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {ArticleComponent} from "./article/article.component";
import {MusiqueComponent} from "./musique/musique.component";
import {PartnerComponent} from "./partner/partner.component";
import {AuthGuard} from "./auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'articles', canActivate: [ AuthGuard ], component: ArticlesComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'musique', component: MusiqueComponent},
  {path: 'partenaires', component: PartnerComponent},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
