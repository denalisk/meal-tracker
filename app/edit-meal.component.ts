import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="container">
    <h1>Change existing meal data</h1>
    <div class="edit-meal-form form-group col-sm-6">
      <label>Name</label>
      <input type="text" name="name" [value]="currentMeal.name" (input)="currentMeal.name = $event.target.value" class="form-control">
      <label>Calories</label>
      <input type="number" name="calories" [value]="currentMeal.calories" (input)="currentMeal.calories = $event.target.value" class="form-control">
      <label>Notes</label>
      <input type="text" name="details" [value]="currentMeal.details" (input)="currentMeal.details = $event.target.value" class="form-control">
      <button type="button" class="btn btn-success" (click)="buttonClicked()">Save Changes</button>
      <button type="button" class="btn btn-danger" (click)="buttonClicked()">Cancel</button>
    </div>
    <div *ngIf="alerting" class="bg-danger">
      <h4>Please make sure you give a name and calories for your meal!</h4>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() currentMeal: Meal;
  @Output() dataEmitter = new EventEmitter();

  public testString: string = "Data from edit meal component is connected";

  public buttonClicked(): void {
    this.dataEmitter.emit("clicky");
  }
}
