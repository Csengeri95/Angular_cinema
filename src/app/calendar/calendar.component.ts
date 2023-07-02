import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { MoviesService } from '../movies.service';





@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date: any;
  copy: string[] = [];
  filteredMovies: any[] = [];
  selectedDay: any;
  formattedDate: any;
  selectDateHasRun = false;

  days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];


  currentTime = new Date();
  currentDay = this.currentTime.getDay()
  dayName = this.days[this.currentDay];





  constructor(public service: MoviesService, private router: Router) {

  }

  ngOnInit(): void {
    this.load()
    if (this.service.movies) {
      this.findFilms(0)
    }
    else {
      this.service.getJSON().subscribe(() => {
        this.findFilms(0);
      });
    }


  }




  load() {
    this.copy = this.days.splice(0, this.currentDay)

    for (let i = 0; i < this.copy.length; i++) {
      this.days.push(this.copy[i])

    }

    if (!this.date) {
      this.date = new Date();
    }


  }

  selectDate(i: string) {
    this.days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat']


    this.currentTime = new Date(i);
    this.currentDay = this.currentTime.getDay();

    this.copy = this.days.splice(0, this.currentDay)


    for (let i = 0; i < this.copy.length; i++) {
      this.days.push(this.copy[i])
    }

    this.selectDateHasRun = true;

    this.formattedDate = i
    this.filteredMovies = this.service.movies.filter((movie: { dates: any }) => {
      return movie.dates.some((movieDate: { date: any }) => {
        return movieDate.date === this.formattedDate;

      });
    });
  }



  selectDay(dayIndex: number) {

    if (this.selectDateHasRun) {
      this.selectedDay = new Date(this.currentTime.getTime() + dayIndex * 24 * 60 * 60 * 1000);
      this.formattedDate = this.selectedDay.toISOString().slice(0, 10);

      return

    }
    this.selectedDay = new Date(this.currentTime.getTime() + dayIndex * 24 * 60 * 60 * 1000);
    this.formattedDate = this.selectedDay.toISOString().slice(0, 10);

  }



  findFilms(dayIndex: any) {
    this.selectedDay = new Date(this.currentTime.getTime() + dayIndex * 24 * 60 * 60 * 1000);
    this.formattedDate = this.selectedDay.toISOString().slice(0, 10);



    this.filteredMovies = this.service.movies.filter((movie: { dates: any }) => {
      return movie.dates.some((movieDate: { date: any }) => {
        return movieDate.date === this.formattedDate;

      });
    });


    this.filteredMovies.sort((a, b) => {
      const aScreening = a.dates.find((date: { date: any }) => date.date == this.formattedDate);
      const bScreening = b.dates.find((date: { date: any }) => date.date == this.formattedDate);
      return aScreening.time.localeCompare(bScreening.time);
    });
  }


  sortByHour(dates: any[]): any[] {
    return dates.sort((a, b) => a.time < b.time ? -1 : 1);
  }


  selectMovie(id: string) {
    this.router.navigate(['selectedmovie/' + id])
  }

  addToCart(movie: any, a: any) {
    const cartItem = new Cart();
    cartItem.title = movie.title;
    cartItem.date = a.date;
    cartItem.time = a.time;
    cartItem.language = a.language;
    cartItem.price = a.price;
    this.service.cart.push(cartItem)
    localStorage.setItem('cart', JSON.stringify(this.service.cart))

  }




}