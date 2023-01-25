import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../movie';
import {SearchResult} from '../search-result';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-recherche-film',
  templateUrl: './recherche-film.component.html',
  styleUrls: ['./recherche-film.component.scss']
})
export class RechercheFilmComponent implements OnInit {

  public pageSize = 5;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25];
  public searchTerm: string = '';
  public movies: Movie[] = [];
  public temporary: string = '';
  public start: number=0;
  public end:number=5;

  constructor(private http: HttpClient) {
  }

  searchMovies(searchTerm: string) {
    sessionStorage.setItem('lastSearch', searchTerm);
    this.movies = [];
    this.http.get<SearchResult>('https://api.themoviedb.org/3/search/movie?api_key=d447357a06be78ac9b47310c3a320100&query=' + searchTerm + '&page=' + (this.pageIndex + 1) + '&page_size=' + this.pageSize)
      .subscribe(data => {
        this.movies = data.results;
      });

  }
  setPage(pageEvent: PageEvent) {
     this.start = pageEvent.pageIndex * pageEvent.pageSize;
     this.end = this.start + pageEvent.pageSize;

  }



  ngOnInit(): void {
    if (sessionStorage.getItem('lastSearch') != null) {
      this.temporary = sessionStorage.getItem('lastSearch') as string;

    }
    this.searchMovies(this.temporary);

  }
}
