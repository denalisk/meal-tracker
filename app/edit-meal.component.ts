import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="well">
    <h1>edit meal component data: {{testString}}</h1>
  </div>
  `
})

export class EditMealComponent {
  public testString: string = "Data from edit meal component is connected";
}
