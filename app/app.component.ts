import { Component } from '@angular/core';
import { Meal } from './models/meal.model.ts';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Hello, World</h1>
  </div>
  <meal-list>meal list not working</meal-list>
  <edit-meal>edit meal not working</edit-meal>
  <new-meal (newMealSender)="addMeal($event)">new meal not working</new-meal>

  `
})

export class AppComponent {

  public addMeal(newMeal: Meal): void {
    newMeal.addMeal();
  }

}
