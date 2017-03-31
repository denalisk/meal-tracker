import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="container">
    <h1>new meal component data: {{testString}}</h1>
    <div class="new-meal-form form-group col-sm-6">
      <input type="text" name="new-name" (input)="newName = $event.target.value" class="form-control" placeholder="What meal did you eat?">
      <input type="number" name="new-calories" (input)="newCalories = $event.target.value" class="form-control" placeholder="How many calories?">
      <input type="text" name="new-details" (input)="newDetails = $event.target.value" class="form-control" placeholder="Any notes you want to add?">
    </div>
  </div>
  `
})

export class NewMealComponent {
  public testString: string = "Data from new meal component is connected";
  public newName: string = null;
  public newCalories: number = null;
  public newDetails: string = null;
}
