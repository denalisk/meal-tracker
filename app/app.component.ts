import { Component } from '@angular/core';
import { Meal } from './models/meal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>iAte</h1>
  </div>
  <div class="container-fluid">
    <div class="col-md-4">
      <edit-meal (dataEmitter)="editMeal($event)" [currentMeal]="currentMeal" *ngIf="isEditing">edit meal not working</edit-meal>
      <div class="panel panel-success" *ngIf="isEditing === false">
        <div class="panel-heading" (click)="createMealButton()">
          <h3>Add a new meal entry</h3>
        </div>
        <new-meal (newMealSender)="addMeal($event)" *ngIf="isCreatingNew">new meal not working</new-meal>
      </div>
      <div class="panel panel-info">
        <div class="panel-heading" (click)="toggleFilterButton()">
          <h4>Filter Food By Calories</h4>
        </div>
        <div class="panel-body" *ngIf="isAddingFilter" >
          <label>I want meals that are</label>
          <div class="form-group">
            <button type="button" (click)="changeFilterDirection(1)" [class]="buttonClass(1)">Greater Than</button>
            <button type="button" (click)="changeFilterDirection(0)" [class]="buttonClass(0)">Less Than</button>
          </div>
          <label>number of calories:</label>
          <input type="number" (input)="changeFilterAmount($event.target.value)" class="form-control">
          <button type="button" class="btn btn-danger" (click)="addFilter()">Add Filter</button>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <meal-list (editMealSender)="editButtonClicked($event)" [history]="history" [filterDirection]="filterDirection" [filterAmount]="filterAmount">meal list not working</meal-list>
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
    this.isCreatingNew = (!(this.isCreatingNew));
    this.isEditing = false;
  }

  public toggleFilterButton(): void {
    this.isAddingFilter = (!(this.isAddingFilter));
  }

  public addFilter(): void {
    Meal.filterDirection = this.filterDirection;
    Meal.filterAmount = this.filterAmount;
    this.isAddingFilter = false;
  }

  public changeFilterDirection(oneOrZero: number): void {
    if (oneOrZero) {
      this.filterDirection = true;
    } else {
      this.filterDirection = false;
    }
  }

  public changeFilterAmount(newAmount: number): void {
    this.filterAmount = newAmount;
  }

  public buttonClass(oneOrZero: number): string {
    let outputString: string = "btn btn-default";
    if (Number(this.filterDirection) === oneOrZero) {
      outputString = "btn btn-lg btn-success";
    }
    return outputString;
  }

}
