import { Component } from '@angular/core';
//import movies from '../assets/movies.json'
import { MoviesService } from './movies.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinema';

  


  constructor(public service: MoviesService) {

  }





}
