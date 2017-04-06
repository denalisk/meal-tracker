import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="panel-body">
    <h3>Add a new meal!</h3>
    <div class="new-meal-form form-group">
      <input type="text" name="new-name" [value]="newName" (input)="newName = $event.target.value" class="form-control" placeholder="What meal did you eat?">
      <input type="number" name="new-calories" [value]="newCalories" (input)="newCalories = $event.target.value" class="form-control" placeholder="How many calories?">
      <input type="text" name="new-details" [value]="newDetails" (input)="newDetails = $event.target.value" class="form-control" placeholder="Any notes you want to add?">
      <div class="well">
        <button type="button" class="btn btn-large btn-info" (click)="clickedSaveButton()">Save Meal</button>
        <button type="button" class="btn btn-large btn-danger" (click)="clickedCancelButton()">Cancel</button>
        <div *ngIf="alerting" class="bg-danger">
          <h4>Please make sure you give a name and calories for your meal!</h4>
        </div>
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
  public passedData: any[] = [false, null];

  public clickedSaveButton(): void {
    if(this.newName === null || this.newCalories === null) {
      this.alerting = true;
    } else {
      if (this.newDetails === null || this.newDetails === "") {
        this.newDetails = "No details provided";
      }
      var newMeal: Meal = new Meal(this.newName, Number(this.newCalories), this.newDetails);
      this.newName = null;
      this.newCalories = null;
      this.newDetails = null;
      this.alerting = false;
      this.passedData[0] = true;
      this.passedData[1] = newMeal;
      this.sendData();
    }
  }

  public clickedCancelButton(): void {
    this.sendData();
  }

  public sendData(): void {
    this.newMealSender.emit(this.passedData);
  }
}
