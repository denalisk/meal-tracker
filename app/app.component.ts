import { Component } from '@angular/core';
import { Meal } from './models/meal.model.ts';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Hello, World</h1>
  </div>
  <meal-list></meal-list>

  `
})

export class AppComponent {

}
