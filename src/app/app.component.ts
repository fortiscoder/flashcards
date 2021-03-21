import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public home = {'active': false};
  public flashcards = {'active': false};
  public settings = {'active': false};

  constructor (router: Router)
  {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd)
      {
        let r = e as NavigationEnd;

        switch (r.url)
        {
          case '/home':
            this.home = {'active': true};
            break;
          case '/flashcard':
            this.flashcards = {'active': true};
            break;
          case '/settings':
            this.settings = {'active': true};
        }
      }
    });
  }
}
