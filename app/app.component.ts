import { Component } from '@angular/core';
import { Meal } from './models/meal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Hello, World</h1>
  </div>
  <meal-list (editMealSender)="editButtonClicked($event)" [history]="history">meal list not working</meal-list>
  <edit-meal (dataEmitter)="editMeal($event)" [currentMeal]="currentMeal" *ngIf="isEditing">edit meal not working</edit-meal>
  <new-meal (newMealSender)="addMeal($event)" *ngIf="isCreatingNew">new meal not working</new-meal>
  <button type="button" class="btn btn-primary" (click)="createMealButton()">Add a new meal entry</button>

  `
})

export class AppComponent {
  public history: Meal[] = Meal.history;

  public isCreatingNew: boolean = false;
  public isEditing: boolean = false;

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

}
