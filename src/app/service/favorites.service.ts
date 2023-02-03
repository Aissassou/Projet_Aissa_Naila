import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteMovies: Movie[] = [];

  constructor() {
    if (sessionStorage.getItem('favoriteMovies')) {
      this.favoriteMovies = JSON.parse(sessionStorage.getItem('favoriteMovies') as string);
    }
  }

  getFavoriteMovies(): Movie[] {
    return this.favoriteMovies;
  }


  addToFavorites(movie: Movie) {
      this.favoriteMovies.push(movie);
      sessionStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
      alert("You add '"+ movie.title +"' to your favorites !")
  }

  isInFavorites(movie:Movie):boolean{
    return(this.getFavoriteMovies().findIndex(m => m.id === movie.id) !== -1);
  }

  removeFromFavorites(movie: Movie) {
    this.favoriteMovies = this.favoriteMovies.filter(m => m.id !== movie.id);
    sessionStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

}
