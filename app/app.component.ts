import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [HeroService],
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}