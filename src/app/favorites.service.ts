import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesServiceService {
  private favoriteMovies: Movie[] = [];

  constructor() {
    if (sessionStorage.getItem('favoriteMovies')) {
      this.favoriteMovies = JSON.parse(sessionStorage.getItem('favoriteMovies') as string);
    }
  }

  // get the list of favorit movies
  getFavoriteMovies(): Movie[] {
    return this.favoriteMovies;
  }

  // add a movie to the list of favorites
  addToFavorites(movie: Movie) {
    this.favoriteMovies.push(movie);
    sessionStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

  // remove a movie from the list of favorites
  removeFromFavorites(movie: Movie) {
    this.favoriteMovies = this.favoriteMovies.filter(m => m.id !== movie.id);
    sessionStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

}
