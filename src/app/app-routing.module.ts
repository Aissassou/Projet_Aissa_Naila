import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { LoginComponent } from './login/login.component';
import { RechercheFilmComponent } from './recherche-film/recherche-film.component';
import { AuthGuard } from './auth.guard';


  const routes: Routes = [
    {
      path:'recherche',
      component : RechercheFilmComponent
    },
  
  {
    path: 'favoris',
    component: FavoriteMoviesComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'film/:id',
    component: DetailFilmComponent
  },

  { path: 'login', component: LoginComponent },

  { path: 'admin', component: AdminComponent },


  {
  path: '**',
  component: AcceuilComponent
  }
  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
