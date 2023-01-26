import { Component, OnInit } from '@angular/core';
import {FavoritesServiceService} from "../favorites.service";
import {Movie} from "../movie";
@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {
  public favoriteMovies: Movie[] = [];


  constructor(private favoritesService: FavoritesServiceService) { }

  ngOnInit(): void {
    this.favoriteMovies = this.favoritesService.getFavoriteMovies();
  }


  removeFromFavorites(movie: Movie) {
    this.favoritesService.removeFromFavorites(movie);
    this.favoriteMovies = this.favoriteMovies.filter(m => m.id !== movie.id);
  }


}
