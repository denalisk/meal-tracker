import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './models/meal.model';

@Pipe({
  name: "calorieSorter",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[]) {
    let output: Meal[] = [];
    for(let meal of input) {
      if (Meal.filterDirection) {
        if (meal.calories > Meal.filterAmount) {
          output.push(meal);
        }
      } else {
        if (meal.calories < Meal.filterAmount) {
          output.push(meal);
        }
      }
    }
    return output;
  }
}
