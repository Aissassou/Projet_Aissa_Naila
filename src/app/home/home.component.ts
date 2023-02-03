import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { SearchResult } from '../model/search-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public trendingMovies: Movie[] = [];

  constructor(private http: HttpClient) {}


  
  ngOnInit() {
    this.http.get<SearchResult>('https://api.themoviedb.org/3/trending/movie/week?api_key=d447357a06be78ac9b47310c3a320100')
    .subscribe(data => {
      this.trendingMovies = data.results;
    });
  }

}
