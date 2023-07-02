import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  images = [
    {
      imageSrc: 'assets/images/caruosel1.jpg',
      alt: 'carousel1'
    },
    {
      imageSrc: 'assets/images/carousel2.jpg',
      alt: 'carousel2'
    },

    {
      imageSrc: 'assets/images/carousel3.jpg',
      alt: 'carousel3'
    },
  ]

}
