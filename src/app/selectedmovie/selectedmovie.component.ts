import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { faClock, faVideoCamera, faUser, faPhotoFilm, faPersonCane } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-selectedmovie',
  templateUrl: './selectedmovie.component.html',
  styleUrls: ['./selectedmovie.component.css']
})
export class SelectedmovieComponent implements OnInit {

  selectedMovie: any
  movie: any;

  times = faClock
  camera = faVideoCamera
  actor = faUser
  age = faPersonCane
  genre = faPhotoFilm



  constructor(public service: MoviesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    const movieId = this.route.snapshot.paramMap.get('id');

    if (this.service.movies) {
      const selectedMovie = this.service.movies.filter((movie: any) => movie.id == movieId)[0];
      this.movie = selectedMovie;
    } else {
      this.service.load().then(() => {
        const selectedMovie = this.service.movies.filter((movie: any) => movie.id == movieId)[0];
        this.movie = selectedMovie;
      });
    }
  }

}
