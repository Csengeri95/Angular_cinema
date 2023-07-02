import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { HomeComponent } from './home/home.component';
import { SelectedmovieComponent } from './selectedmovie/selectedmovie.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './movies/movies.component';
import { CartComponent } from './cart/cart.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CalendarComponent,
    HomeComponent,
    SelectedmovieComponent,
    FooterComponent,
    MoviesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    OrderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
