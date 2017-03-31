import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="container">
    <h1>new meal component data: {{testString}}</h1>
    <div class="new-meal-form form-group col-sm-6">
      <input type="text" name="new-name" [value]="newName" (input)="newName = $event.target.value" class="form-control" placeholder="What meal did you eat?">
      <input type="number" name="new-calories" [value]="newCalories" (input)="newCalories = $event.target.value" class="form-control" placeholder="How many calories?">
      <input type="text" name="new-details" [value]="newDetails" (input)="newDetails = $event.target.value" class="form-control" placeholder="Any notes you want to add?">
    </div>
    <div class="col-sm-6">
      <button type="button" class="btn btn-large btn-info" (click)="clickedSaveButton()">Save Meal</button>
      <div *ngIf="alerting" class="bg-danger">
        <h4>Please make sure you give a name and calories for your meal!</h4>
      </div>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  public testString: string = "Data from new meal component is connected";
  public newName: string = null;
  public newCalories: number = null;
  public newDetails: string = null;
  public alerting: boolean = false;

  public clickedSaveButton(): void {
    if(this.newName === null || this.newCalories === null) {
      this.alerting = true;
    } else {
      if (this.newDetails === null || this.newDetails === "") {
        this.newDetails = "No details provided";
      }
      var newMeal: Meal = new Meal(this.newName, this.newCalories, this.newDetails);
      this.newName = null;
      this.newCalories = null;
      this.newDetails = null;
      this.alerting = false;
      this.newMealSender.emit(newMeal);
    }
    console.log(this.alerting);
  }
}
