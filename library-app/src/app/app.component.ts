import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { userService } from './services/user.service';
import { AuthorService } from './services/author.service';
import { Subject } from 'rxjs';
import { log } from 'console';
import { BookService } from './services/book.service';
import { PublisherService } from './services/publisher.service';
import { CountryService } from './services/country.service';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
@Component({
  selector: 'app-root',
  standalone: true,
  // CommonModule, BrowserModule,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, FooterComponent, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [userService, userService, BookService, PublisherService, CountryService],

})
export class AppComponent implements OnInit {
  private $skip = new Subject<void>();
  currentView: string = '';
  constructor(private _router: Router,) {

  }
  ngOnInit(): void {
    // this._router.events.pipe(takeUntil(this.$skip)).subscribe((event) => {
    //   if (event instanceof NavigationEnd) this.currentView = event.url;
    //   console.log(this.currentView);

    // });
  }
  title = 'library-app';
}
