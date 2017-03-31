import { Component } from '@angular/core';
import { Meal } from './models/meal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Hello, World</h1>
  </div>
  <meal-list (editMealSender)="editButtonClicked($event)" [history]="history" [filterDirection]="filterDirection" [filterAmount]="filterAmount">meal list not working</meal-list>
  <edit-meal (dataEmitter)="editMeal($event)" [currentMeal]="currentMeal" *ngIf="isEditing">edit meal not working</edit-meal>
  <new-meal (newMealSender)="addMeal($event)" *ngIf="isCreatingNew">new meal not working</new-meal>
  <button type="button" class="btn btn-primary" *ngIf="isCreatingNew === false && isEditing === false" (click)="createMealButton()">Add a new meal entry</button>
  <div class="panel panel-info">
    <div class="panel-heading" (click)="toggleFilterButton()">
      <h4>Filter Food By Calories</h4>
    </div>
    <div class="panel-body" *ngIf="isAddingFilter" >
      <label>I want meals that are</label>
      <div class="form-group">
        <label>
        <input type="radio" [(ngModel)]="filterDirection" [value]="true"> Greater Than</label><br>
        <label>
        <input type="radio" [(ngModel)]="filterDirection" [value]="false"> Less Than</label>
      </div>
      <label>number of calories:</label>
      <input type="number" (input)="filterAmount = $event.target.value" class="form-control">
      <button type="button" class="btn btn-danger" (click)="addFilter()">Add Filter</button>
    </div>
  </div>

  `
})

export class AppComponent {
  public history: Meal[] = Meal.history;

  public isCreatingNew: boolean = false;
  public isEditing: boolean = false;

  public isAddingFilter: boolean = false;
  public filterDirection: boolean = true;
  public filterAmount: number = 0;

  public currentMeal: Meal = null;


  public addMeal(passedData: any[]): void {
    if (passedData[0]) {
      passedData[1].addMeal();
    }
    this.isCreatingNew = false;
  }

  public editMeal(passedData: string): void {
    this.isEditing = false;
  }

  public editButtonClicked(selectedMeal: Meal) {
    this.currentMeal = selectedMeal;
    this.isEditing = true;
    this.isCreatingNew = false;
  }

  public createMealButton(): void {
    this.isCreatingNew = true;
    this.isEditing = false;
  }

  public toggleFilterButton(): void {
    this.isAddingFilter = (!(this.isAddingFilter));
  }

  public addFilter(): void {
    console.log("The filter values are: filterDirection: " + this.filterDirection + " and filterAmount is " + this.filterAmount);
  }

  public filterDirectionFunction(oneOrZero: number) {
    if (oneOrZero) {
      this.filterDirection = true;
    } else {
      this.filterDirection = false;
    }
  }

}
