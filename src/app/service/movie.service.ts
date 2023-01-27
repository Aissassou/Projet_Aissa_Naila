import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(query: string, page: number) {
    const apiKey = 'd447357a06be78ac9b47310c3a320100';
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
  }


}



