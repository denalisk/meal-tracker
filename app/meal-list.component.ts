import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './models/meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="container-fluid">

    <div class="" *ngFor="let currentMeal of history | calorieSorter:filterData">
      <div class="col-sm-4">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h2>{{currentMeal.name}}</h2>
          </div>
          <div class="panel-body">
            <ul>
              <li>Calories: {{currentMeal.calories}}</li>
              <li>Notes: {{currentMeal.details}}</li>
            </ul>
          </div>
          <button type="button" class="btn btn-info" (click)="editButtonClicked(currentMeal)">Edit this entry</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() history: Meal[];
  @Input() filterAmount: number;
  @Input() filterDirection: boolean;
  @Output() editMealSender = new EventEmitter();

  public filterData: any[] = [this.filterDirection, this.filterAmount];

  public editButtonClicked(selectedMeal: Meal): void {
    this.editMealSender.emit(selectedMeal);
  }

  public testString: string = "Data from meal list component is connected";
}
