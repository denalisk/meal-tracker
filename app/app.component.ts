import { Component } from '@angular/core';
import { Meal } from './models/meal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Hello, World</h1>
  </div>
  <meal-list (editMealSender)="editbuttonClicked($event)" [history]="history">meal list not working</meal-list>
  <edit-meal (editSender)="editMeal($event)" [currentMeal]="currentMeal" *ngIf="isEditing">edit meal not working</edit-meal>
  <new-meal (newMealSender)="addMeal($event)" *ngIf="isCreatingNew">new meal not working</new-meal>

  `
})

export class AppComponent {
  public history: Meal[] = Meal.history;

  public isCreatingNew: boolean = false;
  public isEditing: boolean = false;

  public currentMeal: Meal = null;


  public addMeal(newMeal: Meal): void {
    newMeal.addMeal();
  }

  public editMeal(passedData: any[]): void {
    let passedMeal = passedData[1];
    if(passedData[0]) {
      for(let checkMeal of Meal.history) {
        if(checkMeal.mealId === passedMeal.mealId) {
          checkMeal = passedMeal;
          break;
        }
      }
    }
  }

  public editButtonClicked(selectedMeal: Meal) {
    this.currentMeal = selectedMeal;
  }

}
