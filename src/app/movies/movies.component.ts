import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public service: MoviesService, private router: Router) { }

  ngOnInit(): void {
   

  }


  selectMovie(id: string) {
    this.router.navigate(['selectedmovie/' + id])
  }
}
