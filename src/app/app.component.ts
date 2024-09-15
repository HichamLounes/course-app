import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  display = false;
  constructor(private autService: AuthService, private router: Router) { }


  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.display = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.display = false;
      }
    })
  }

  logIn() {
    this.autService.login();
  }
  logOut() {
    this.autService.logout();
  }

}
