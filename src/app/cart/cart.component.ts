import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service: MoviesService) {

  }

  price: number = 0
  buyer:string='';
  email:string='';

  ngOnInit(): void {
    this.load();
    this.getPrice();
  }

  load() {
    const cartData = localStorage.getItem('cart')
    if (cartData !== null) {
      this.service.cart = JSON.parse(cartData)
    }
  }

  removeItem(i: number) {
    this.service.cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.service.cart));
    this.getPrice();
  }


  getPrice() {
    this.price = this.service.cart.map(a => (a.price * a.quantity)).reduce((a, c) => a + c, 0);
  }

  formTitle(a: any) {
    let maxLength: number = 12;

    if (a.length > maxLength) {
      return a.slice(0, maxLength) + '...'
    } else {
      return a
    }

    
  }

}
