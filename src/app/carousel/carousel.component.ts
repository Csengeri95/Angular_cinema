import { Component, Input, OnInit } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';



interface Carousel {
  imageSrc: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: Carousel[] = []
  @Input() controls = true;
  @Input() slide = false;

  slideTime = 7000;

  selectedIndex = 0;
  faLeft = faArrowAltCircleLeft;
  faRight = faArrowAltCircleRight;

  ngOnInit(): void {
    if (this.slide) {
      this.autoSlide();
    }
  }

  autoSlide() {
    setInterval(() => {
      this.next()
    }, this.slideTime)
  }

  selectImage(index: number) {

    this.selectedIndex = index;
  }

  prev() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }

  }

  next() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
