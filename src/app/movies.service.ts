import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, resolveForwardRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnInit {

  jsonURL = 'assets/movies.json';
  movies: any;
  selectedMovie: any
  cart: Array<Cart> = new Array<Cart>();


  constructor(public http: HttpClient, public router: ActivatedRoute) {

    this.ngOnInit()
  }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.load()
      .catch(error => {
        console.log(error)
      })
  }

  public load(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getJSON().subscribe(data => {
        this.movies = data;
        resolve();
      }, error => {
        console.log(error);
        reject(error)
      });

    })


  }


  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }




}
