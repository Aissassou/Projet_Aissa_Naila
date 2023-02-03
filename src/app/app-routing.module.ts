import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { LoginComponent } from './login/login.component';
import { MovieResearch } from './movie-research/movie-research';
import { AuthguardService } from './service/authguard.service';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'search', component: MovieResearch },

  { path: 'favorites', component: FavoriteMoviesComponent, canActivate: [AuthguardService] },

  { path: 'film/:id', component: MovieDetailComponent },

  { path: 'login', component: LoginComponent },

  { path: 'admin', component: AdminComponent },

  { path: 'home', component: HomeComponent },

  { path: '**', component: NotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
