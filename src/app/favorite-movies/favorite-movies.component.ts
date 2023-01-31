import { Component, OnInit } from '@angular/core';
import {FavoritesService} from "../service/favorites.service";
import {Movie} from "../model/movie";
@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {
  public favoriteMovies: Movie[] = [];


  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.favoriteMovies = this.favoritesService.getFavoriteMovies();
  }


  removeFromFavorites(movie: Movie) {
    this.favoritesService.removeFromFavorites(movie);
    this.favoriteMovies = this.favoriteMovies.filter(m => m.id !== movie.id);
  }


}
