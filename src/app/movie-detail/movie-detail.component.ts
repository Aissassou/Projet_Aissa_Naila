import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { FavoritesService } from '../service/favorites.service';
import { MockService } from '../service/mock.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie: any;
  private movieId: any;
  private  apiKey = 'd447357a06be78ac9b47310c3a320100';


  constructor(private route: ActivatedRoute, private http: HttpClient, private favoritesService: FavoritesService, public mockService: MockService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.apiKey}`)
      .subscribe((data) => {
        this.movie = data;
      });
  }

  isConnected(): boolean {
    return this.mockService.isConnected == true;
  }

  isInFavorites(movie: Movie): boolean {
    return this.favoritesService.isInFavorites(movie);
  }

  addToFavorites(movie: Movie) {
    this.favoritesService.addToFavorites(movie);
  }

}
