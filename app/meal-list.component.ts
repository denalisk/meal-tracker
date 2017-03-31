import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="well">
    <h1>meal list component data: {{testString}}</h1>
  </div>
  `
})

export class MealListComponent {
  public testString: string = "Data from meal list component is connected";
}
