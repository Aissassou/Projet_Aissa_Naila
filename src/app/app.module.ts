import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { RechercheFilmComponent } from './recherche-film/recherche-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ResultatFilmComponent } from './resultat-film/resultat-film.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteMoviesComponent,
    RechercheFilmComponent,
    DetailFilmComponent,
    ResultatFilmComponent,
    AcceuilComponent,
    LoginComponent,
    AdminComponent
    ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
