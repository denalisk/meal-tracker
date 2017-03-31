import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="container">
    <h1>edit meal component data: {{testString}}</h1>
    <div class="edit-meal-form form-group col-sm-6">
      <input type="text" name="name" [value]="currentMeal.name" (input)="currentMeal.name = $event.target.value" class="form-control">
      <input type="number" name="calories" [value]="currentMeal.calories" (input)="currentMeal.calories = $event.target.value" class="form-control">
      <input type="text" name="details" [value]="currentMeal.details" (input)="currentMeal.details = $event.target.value" class="form-control">
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() currentMeal: Meal;

  public testString: string = "Data from edit meal component is connected";
}
