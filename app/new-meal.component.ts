import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="well">
    <h1>new meal component data: {{testString}}</h1>
  </div>
  `
})

export class EditMealComponent {
  public testString: string = "Data from new meal component is connected";
}
