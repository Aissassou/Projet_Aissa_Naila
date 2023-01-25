import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { SearchResult } from '../search-result';




@Component({
  selector: 'app-recherche-film',
  templateUrl: './recherche-film.component.html',
  styleUrls: ['./recherche-film.component.scss']
})
export class RechercheFilmComponent implements OnInit {



  public searchTerm: string = '';
  public movies: Movie[] = [];
 
  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string) {

    this.movies = [];
    this.http.get<SearchResult>('https://api.themoviedb.org/3/search/movie?api_key=d447357a06be78ac9b47310c3a320100&query=' + searchTerm)
      .subscribe(data => {
        this.movies = data.results;
      });
  }

  ngOnInit(): void {

  }

}
