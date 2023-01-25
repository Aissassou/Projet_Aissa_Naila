import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  public trendingMovies: Movie[] = [];

  constructor(private http: HttpClient) {}


  
  ngOnInit() {
    this.http.get<SearchResult>('https://api.themoviedb.org/3/trending/movie/week?api_key=d447357a06be78ac9b47310c3a320100')
    .subscribe(data => {
      this.trendingMovies = data.results;
    });
  }

}
