import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  movie: any; 
  movieId: any; 
  apiKey = 'd447357a06be78ac9b47310c3a320100'; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    window.scrollTo( 0 , 0);
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.apiKey}`)
      .subscribe((data) => {
        this.movie = data;
      });
  }

}
