import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { SearchResult } from '../model/search-result';
import { PageEvent } from '@angular/material/paginator';
import { FavoritesService } from "../service/favorites.service";
import { MockService } from '../service/mock.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-research',
  templateUrl: './movie-research.component.html',
  styleUrls: ['./movie-research.component.scss']
})
export class MovieResearch implements OnInit {

  public pageSize = 5;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25];
  public searchTerm: string = '';
  public movies: Movie[] = [];
  private temporary: string = '';
  public start: number = 0;
  public end: number = 5;

  constructor(private http: HttpClient, private favoritesService: FavoritesService, private mockService: MockService) {
  }


  searchMovies(searchTerm: string) {
    sessionStorage.setItem('lastSearch', searchTerm);
    this.movies = [];
    this.http.get<SearchResult>('https://api.themoviedb.org/3/search/movie?api_key=d447357a06be78ac9b47310c3a320100&query=' + searchTerm + '&page=' + (this.pageIndex + 1) + '&page_size=' + this.pageSize)
      .pipe(
        catchError(error => {
          return of({ results: [] });
        })
      )
      .subscribe(data => {
        this.movies = data.results;
      });
  }

  setPage(pageEvent: PageEvent) {
    window.scrollTo(0, 0);
    this.start = pageEvent.pageIndex * pageEvent.pageSize;
    this.end = this.start + pageEvent.pageSize;
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

  removeFromFavorites(movie : Movie){
    this.favoritesService.removeFromFavorites(movie);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (sessionStorage.getItem('lastSearch') != null) {
      this.temporary = sessionStorage.getItem('lastSearch') as string;
    }
    this.searchMovies(this.temporary);
  }
}
